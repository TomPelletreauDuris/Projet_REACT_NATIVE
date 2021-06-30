import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationProps } from "../navigation/app_stacks";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import YoutubeVideo from "../services/youtube.model";

interface VideoItemProps extends NavigationProps {
  donnee: YoutubeVideo;
}

export default class VideoItem extends Component<VideoItemProps> {
  render() {
    const { donnee, navigation } = this.props;
    return (
      <View>
        <TouchableOpacity 
          style={styles.container}
          onPress={() => {
            navigation.navigate("Video", {
              videoid: donnee.id["videoId"],
              videotitle: donnee.snippet["title"],
              videodescription: donnee.snippet["description"],
              videoimage: donnee.snippet["thumbnails"]["high"]["url"],
            });
          }}
        >
          <View>
            <Image
              style={styles.image}
              source={{ uri: donnee.snippet["thumbnails"]["high"]["url"] }}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.myText}>{donnee.id["title"]}</Text>
            <Text style={styles.myText}>{donnee.snippet["description"]}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: hp("15%"),
    width: wp("30%"),
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    marginBottom: hp("3%"),
    overflow : "hidden"

  },
  textWrapper: {
    height: hp("10%"), // 70% of height device screen
    width: wp("60%"), // 80% of width device screen
    marginLeft: hp("2%"),
    paddingRight: hp("2%"),
  },
  myText: {
    fontSize: hp("2%"), 
    marginBottom: 5,
  },
  
});
