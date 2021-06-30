import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ActivityIndicator,
} from "react-native";
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList, NavigationProps } from "../navigation/app_stacks";
import React, { Component } from "react";
import { Podcast } from "../services/deezer.model";
import Deezerdbapi from "../services/deezerdbapi.service";
import Input from "../components/Input";
import Playlist from "../components/Playlist";
import Filter from "../components/FlatListFilters";
import youtubedbapi, { createYoutubeVideos } from "../services/youtubedbapi";
import YoutubeVideo from "../services/youtube.model";
import VideoList from "../components/VideoList";

interface ExplorerScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Explorer">;
}
interface ExplorerSearchScreenState {
  playlist: Array<Podcast>;
  donnees: Array<YoutubeVideo>;
}

export default class ExplorerScreen extends Component<
  ExplorerScreenProps,
  ExplorerSearchScreenState
> {
  state = {
    playlist: [],
    donnees: [],
  };

  onInput = async (text: string) => {
    const response = await youtubedbapi.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({
      donnees: response.data.items,
    });
    createYoutubeVideos(response.data.items);

    Deezerdbapi.searchDatabyWord(text).then((playlist: Array<Podcast>) => {
      this.setState({ playlist });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Input placeholder="Rechercher" onSubmitEditing={this.onInput} />
       

        <Filter onPress={(val) => this.onInput(val)} />

        <Playlist
          playlist={this.state.playlist}
          navigation={this.props.navigation}
        />
        <VideoList
          donnees={this.state.donnees}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
