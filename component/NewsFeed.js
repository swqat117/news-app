import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import Card from "./Card";

import LottieView from "lottie-react-native";
import SwipeableFlatList from "react-native-swipeable-list";
import { fetchAllData, fetchNewData, deleteDataItem } from "../actions";

const darkColors = {
  background: "#121212",
  primary: "#BB86FC",
  primary2: "#3700b3",
  secondary: "#03DAC6",
  onBackground: "#FFFFFF",
  error: "#CF6679",
};

const colorEmphasis = {
  high: 0.87,
  medium: 0.6,
  disabled: 0.38,
};

const NewsFeed = ({ navigation, fetchAllData, news, fetchNewData, deleteDataItem }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, onRefresh] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetchAllData();
    setLoading(false);

  }, []);

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        <View style={[styles.button, styles.button1]}>
          <Pressable onPress={() => deleteDataItem(qaItem)}>
            <Text style={[styles.buttonText, styles.button1Text]}>Archive</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.button3]}>
          <Pressable onPress={() => deleteDataItem(qaItem)}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!loading ? (
        <View>
          <Text style={styles.text}>BBC News </Text>
          <SwipeableFlatList
            onRefresh={fetchNewData}
            refreshing={refresh}
            shouldBounceOnMount
            data={news}
            maxSwipeDistance={240}
            renderQuickActions={({ index, item }) => QuickActions(index, item)}
            keyExtractor={(news) => news.publishedAt + news.title}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subtitle={item.description}
                image={item.urlToImage}
                onPress={() => navigation.navigate("Info", item)}
              />
            )}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <LottieView
            loop
            autoPlay
            source={require("../animations/96231-loading-orange-animation.json")}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10,
    paddingBottom: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#786767",
    marginBottom: 15,
    fontWeight: "bold",
  },
  qaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    opacity: colorEmphasis.high,
  },
  button1Text: {
    color: darkColors.primary,
  },
  button2Text: {
    color: darkColors.secondary,
  },
  button3Text: {
    color: darkColors.error,
  },
});

const mapStateToProps = (state) => {
  return {
    news: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllData: () => {
      dispatch(fetchAllData());
    },
    fetchNewData: () => {
      dispatch(fetchNewData());
    },
    deleteDataItem: (data) => {
      dispatch(deleteDataItem(data));

    }
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

export default NewsContainer;
