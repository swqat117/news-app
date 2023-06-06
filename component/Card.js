import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import AppButton from "./AppButton";

const Card = ({ title, subtitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={
            image
              ? {
                  uri: image,
                }
              : require("../assets/download.png")
          }
        />
        <View style={styles.detailsConatiner}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <AppButton onPress={onPress} title="Read more.." />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    elevation:4,
    padding:2,
    borderRadius: 8,
    marginBottom: 20,
  },
  image: {
    height: 180,
    borderRadius:8,
    elevation:4
  },
  detailsConatiner: {
    padding: 20,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    color: "#646165",
    marginBottom: 7,
    fontWeight: "bold",
  },
});
export default Card;
