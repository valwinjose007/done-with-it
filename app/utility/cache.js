import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const expiryInMinutes = 5;
const prefix = "cache_";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: new Date(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.error(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error(error);
  }
};

const isExpired = (item) => {
  const now = moment(new Date());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

export default {
  store,
  get,
};
