import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {inject, observer, Provider} from "mobx-react";


@inject('store') @observer export default class AccountItem extends Component<{}> {
    
      render () {
          
          const account = this.props.store.account;
          return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",alignItems:"center"}}>
                  
                  <Image style={styles.image} source={{uri: account.url}} /> 
                  
                  <View style={styles.containerDescription}>
                  <Text style={{margin:10, }}> {account.description} </Text>
                    
                  </View>
             </View>
          )
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
      },

      containerDescription: { 
        flex: 2, 
        //flexDirection:"row", 
      },

      containerImage:{
          flex : 1,
        flexDirection: "column",
        
      }
    });
