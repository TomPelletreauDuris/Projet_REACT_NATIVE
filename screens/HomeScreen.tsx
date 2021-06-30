import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator  } from "react-native";
import { RootStackParamList, NavigationProps } from "../navigation/app_stacks";
import TrackItem from "../components/ExampleTrack";
import deezerdbapiService from "../services/deezerdbapi.service";
import {Track} from "../services/deezer.model";
import { RouteProp } from "@react-navigation/native";

interface HomeScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Track">;
}

interface HomeSearchScreenState {
  track: Track;
  isLoading : boolean;

}

export default class HomeScreen extends Component<
  HomeScreenProps, HomeSearchScreenState > {
state = {
  track : null,
  isLoading : true,
};

componentDidMount() {

    deezerdbapiService
      .ExampleforTrack()
      .then((track: Track) =>this.setState({ track, isLoading : false }) );
};

  render() {
      if (this.state.isLoading) return <ActivityIndicator/>;
    else {
      return (
      <View>
        <Text style={styles.title}> Bienvenue </Text>
        <TrackItem
            track={this.state.track}
            navigation={this.props.navigation}
        />


      </View>
    );
  }
}}

const styles = StyleSheet.create({
  title: {
    textAlign : "center",
    marginTop : 15,
    fontSize : 25,
  },
});
