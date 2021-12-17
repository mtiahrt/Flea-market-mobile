import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Divider, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CatagoryCard = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <Card key={props.id} style={styles.container}>
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.description}</Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri: props.imageURL,
        }}
      />
    </Card>
    <Divider />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "stretch",
    borderRadius: 30,
    borderColor: "red",
  },
});
export default CatagoryCard;
