import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList, NavigationProps } from "../navigation/app_stacks";
import {Track} from "../services/deezer.model";
import { Video } from 'expo-av' ;


interface TrackScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Track">;
}

interface PodcastScreenState {
  track: Track;
  isLoading: boolean;
}

export default class TrackScreen extends Component<
  TrackScreenProps,
  PodcastScreenState
> {
  render() {
    const tracktitle = this.props.route.params.tracktitle;
    const trackpreview = this.props.route.params.trackpreview;
      return (
        <View style={styles.container}>
          <Text style={styles.title}> {tracktitle} </Text>
          <View style={styles.mediaplayer}>
          <Image style={styles.image} source={{ uri : `https://fr.shopping.rakuten.com/photo/936864695_L.jpg` }} />
          <Video
            source={{uri :`${trackpreview}`}}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={true}
            isLooping={false}
            useNativeControls
            style={styles.video}
          />
        </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15,
    zIndex : 0,
    position:"absolute",
  },
  title: { fontSize: 22, marginTop : 10, marginBottom: 10, textAlign:"center" },
  video:{
    width: 300, 
    height: 300,
    zIndex:1,
  },
  mediaplayer :{
      marginTop : 20
  }
});
