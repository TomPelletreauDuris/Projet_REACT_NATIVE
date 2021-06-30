import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

interface HearderTouchableOpacityProps {}

export default class HeaderTouchableOpacity extends Component<
  HearderTouchableOpacityProps,
  {}
> {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => alert("This is a button!")}
          style={styles.Buttonheader}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("This is a button!")}
          style={styles.Buttonheader}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Buttonheader: {
    flexdirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#D3D3D3",
  },
});
