import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { LibraryScreenProps } from "../navigation/app_stacks";

export default class LibraryScreen extends Component<LibraryScreenProps, {}> {
  render() {
      return (
        <View style={styles.container}>
        <Text style={styles.title} >En cours de maintenance, revenez plus tard!</Text> 
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop:"auto",
      marginBottom:"auto",
    },
    title: {
      textAlign : "center",
      fontSize : 15,
    },
  });
  