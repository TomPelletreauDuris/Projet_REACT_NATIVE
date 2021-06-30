import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList, NavigationProps } from "../navigation/app_stacks";
import Account from "../services/account";
import AccountItem from "../components/AccountItem";


interface MyAccountScreenProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Account">;
}

interface MyAccountScreenState {
  account: Account;
  accounts: Array<string>;
}


export default class MyAccountScreen extends Component<MyAccountScreenProps, MyAccountScreenState> {
  state = {
    account: null,
    accounts: [],
  }  

  
  render() {
      const { navigation } = this.props;
  
      return (
        <View style={{ flex: 1}}>
          <View style={{flex: 1, backgroundColor: "powderblue", flexDirection : 'row'}}>
          <View style={styles.container3}>
            <AccountItem/>
          </View>

          </View>
                   
        <View style={{ flex: 4, justifyContent: "space-around", alignItems: "center"}}>     
         <Text> </Text>
          
          
          </View>  
        </View>
      );
    }
  }

 
  const styles = StyleSheet.create({
    textinput: {
      flex : 1,
      marginLeft : 10,
      justifyContent : 'center',

    },

    container3: {
      flex :3,
      margin : 5,
      justifyContent : 'center',

    },

    container1: {
      flex :1,
      margin : 5,
      justifyContent : 'center',
    }
  });