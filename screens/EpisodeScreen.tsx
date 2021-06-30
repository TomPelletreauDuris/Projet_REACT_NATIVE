import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList, NavigationProps } from "../navigation/app_stacks";
import {Episode} from "../services/deezer.model";
import { Video } from 'expo-av' ;


interface EpisodeScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Episode">;
}

interface PodcastScreenState {
  episode: Episode;
  isLoading: boolean;
}

export default class EpisodeScreen extends Component<
  EpisodeScreenProps,
  PodcastScreenState
> {

  render() {
    const episodetitle = this.props.route.params.episodetitle;
    const episodepicture = this.props.route.params.episodepicture;

      return (
        <View style={styles.container}>
          <Text style={styles.title}> {episodetitle} </Text>
          <View style={styles.mediaplayer}>
          <Image style={styles.image} source={{ uri : `${episodepicture}` }} />
          <Video
            source={{uri :'https://p.scdn.co/mp3-preview/3c631392ca9c909eefdf91c1d1712af3a6b31389?cid=9c65337cedeb43cf858316fc440430ba.mp3'}}
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
    zIndex:5
  },
  mediaplayer :{
      marginTop : 20
  }
});
