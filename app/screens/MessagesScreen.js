import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeperator,
} from "../components/lists";
// import ListItem from "../components/lists/ListItem";
// import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
// import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";

const _messages = [
  {
    id: 1,
    title:
      "Tittle 1dfsdflsjdf slfjslfkjs flksjdfl sdjflksdjflsdjkflsdkjflsdkfjlsd flskdfj lsdkjflskfjlskfjlsdkf jsldfkj sldfkj sldkfjsldfk jsldkfj slk dfslf jlsdkfjslkdf jsldfkj",
    description:
      "Descriptiosdfs ksdflskdjfls dfjslkdfjls dkfjsldfkjsl fjsdflksjd flskjfd lksjfdlksjdfl sdjkfl sfkjlsdkfjsl fdjsdlf kjsdlfksjf lksjflsdfkjls fkjsdfn 1",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 2,
    title: "Tittle 2",
    description: "Description 2",
    image: require("../assets/avatar.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(_messages);
  const [refreshing, setRefreshing] = useState(false);

  const deleteItem = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };

  const renderItem = ({ item }) => (
    <ListItem
      tittle={item.title}
      subTittle={item.description}
      image={item.image}
      onPress={() => {
        console.log(item);
      }}
      renderRightActions={() => (
        <ListItemDeleteAction onPress={() => deleteItem(item)} />
      )}
    />
  );

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Tittle 2",
              description: "Description 2",
              image: require("../assets/avatar.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
