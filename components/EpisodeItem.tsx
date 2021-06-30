import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationProps } from "../navigation/app_stacks";
import {Episode} from "../services/deezer.model";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface EpisodeItemProps extends NavigationProps {
  episode: Episode;
}

export default class EpisodeItem extends Component<EpisodeItemProps> {
  render() {
    const { episode, navigation } = this.props;
    return (
      <View >
         <TouchableOpacity style={styles.container}
          onPress={() => {
            navigation.navigate("Episode", {
              episodeid: episode.id, 
              episodetitle: episode.title,
              episodepicture:episode.url,
            });
          }}
        >
          <View >
          <Image style={styles.image} source={require('../assets/icons8-lecture-50.png')} /> 
          </View>
          <View style={styles.textWrapper}>
          <Text style={styles.myText}>{episode.title}</Text>
          <Text style={styles.myText}>{episode.duration}</Text>
          </View>
        </TouchableOpacity>

        </View>
       
      
    );
  }
}


const styles = StyleSheet.create({
  image: { 
    height: hp('5%'), 
    width: wp('10%'),
    display : "flex"
  },
  container: { 
    flex: 1, 
    flexDirection:"row", 
    marginBottom : hp('3%'),
  },
  textWrapper: {
    height: hp('10%'), // 70% of height device screen
    width: wp('75%'),  // 80% of width device screen
    flexDirection : "column",
    marginLeft : hp('2%'),
    paddingRight : hp('2%')
  },
  myText: {
    fontSize: hp('2%'), // End result looks like the provided UI mockup
    marginBottom : 5,
  },
  
});






