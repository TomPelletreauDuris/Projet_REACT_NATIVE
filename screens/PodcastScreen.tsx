import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList, NavigationProps } from "../navigation/app_stacks";
import {Episode} from "../services/deezer.model";
import deezerdbapiService from "../services/deezerdbapi.service";
import ListEpisodes from '../components/ListEpisodes' ;

interface ExplorerScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Podcast">;
}

interface ExplorerScreenState {
  episodes: Array<Episode>;
  isLoading: boolean;
}

export default class PodcastScreen extends Component<
  ExplorerScreenProps,
  ExplorerScreenState
> {
  state = {
    isLoading: true,
    episodes: [],
  };
  
    

  componentDidMount() {
    const podcastid = this.props.route.params.podcastid;
  
  deezerdbapiService
  .findPodcastById(podcastid)
  .then((episodes: Array<Episode>) => {
    // Update screen title
    this.setState({ episodes, isLoading: false });
  });
};
    

  render() {
    const podcasttitle = this.props.route.params.podcasttitle;
    const podcastdescription = this.props.route.params.podcastdescription;
    if (this.state.isLoading) return <ActivityIndicator />;
    else {

      return (
        <View style={styles.container}>
          <View style={styles.containerimage}>
          <Text style={styles.title}> {podcasttitle} </Text>
          <Image style={styles.image} source={{ uri : `${this.state.episodes[0].url}` }} />
          </View>
          <Text style={styles.text}> Description : </Text>
          <Text style={styles.text}> {podcastdescription} </Text>
          <ListEpisodes
            episodes={this.state.episodes}
            navigation={this.props.navigation}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  containerimage: {
    alignItems : "center",
    justifyContent: "flex-start",
  },
  image: {
    marginTop : 20,
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
    textAlign : "left",
    marginBottom :15
  },
  title: {
    fontSize: 26,
    marginLeft: 15,
    marginRight: 15,
    textAlign : "center",
    marginBottom :2
  },
});
