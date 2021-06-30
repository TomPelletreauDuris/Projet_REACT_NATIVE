import { forSlideLeft, forSlideRight } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators";
import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationProps } from "../navigation/app_stacks";
import {Podcast} from "../services/deezer.model";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface PodcastItemProps extends NavigationProps {
  podcast: Podcast;
}

export default class PodcastItem extends Component<PodcastItemProps> {
  render() {
    const { podcast, navigation } = this.props;
    return (
      <View >
        <TouchableOpacity style={styles.container}
          onPress={() => {
            navigation.navigate("Podcast", {
              podcastid: podcast.id, 
              podcasttitle : podcast.title, 
              podcastdescription : podcast.description
            });
          }}
        >
          <View >
          <Image style={styles.image} source={{ uri: podcast.url }} />
          </View >
          <View style={styles.textWrapper}>
          <Text style={styles.myText}>{podcast.title}</Text>
          <Text style={styles.description}> Type : Podcast </Text>
          <Text style={styles.description}> {podcast.description}</Text>
          </View>
        </TouchableOpacity>

        </View>
       
      
    );
  }
}


const styles = StyleSheet.create({
  image: { 
    height: hp('15%'), 
    width: wp('30%'),
    borderRadius : 5,
    display : "flex"
  },
  container: { 
    flex: 1, 
    flexDirection:"row", 
    marginBottom : hp('3%'),
    overflow : "hidden"
  },

  textWrapper: {
    height: hp('10%'), // 70% of height device screen
    width: wp('60%'),  // 80% of width device screen
    flexDirection : "column",
    marginLeft : hp('2%'),
    paddingRight : hp('2%')
  },
  myText: {
    fontSize: hp('2%'), 
    marginBottom : 5,
    
  },
  description: {
    fontSize: 14, 
    marginBottom : 5,
    textAlign : "left",
  }
});






