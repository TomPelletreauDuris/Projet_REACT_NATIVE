import React, { Component } from "react";
import { Alert, StyleSheet, Text, View} from "react-native";
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList, NavigationProps } from "../navigation/app_stacks";
import VideoYoutubePlayer from "../components/VideoYoutubePlayer";

interface VideoScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Video">;
}

interface VideoScreenState {
  playing: boolean,
  setPlaying : boolean,
}

export default class VideoScreen extends Component<
  VideoScreenProps,
  VideoScreenState
>{
render(){
  const videotitle = this.props.route.params.videotitle;
  const videoid = this.props.route.params.videoid;
  console.log(videoid)
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {videotitle} </Text>
        <View style={styles.mediaplayer}>
        <VideoYoutubePlayer  videoid={videoid}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  title: { fontSize: 22, marginTop: 10, marginBottom: 10, textAlign: "center", padding:5 },
  mediaplayer: {
    marginTop: 30,
  },
});
