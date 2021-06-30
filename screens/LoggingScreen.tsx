import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Account from "../services/account";
import data from '../assets/db.json'
import { inject, Provider } from "mobx-react";
import {
  Alert,
} from 'react-native';

interface LogginScreenProps {
  //route: RouteProp<RootStackParamList, "Accueil">;
  //account: Account;
  onAuthSuccess: (loggedAccount: Account) => void;
}

interface LogginScreenState {
  email: string,
  password: string,
  accounts: Array<Object>;
  account: Account;
  isConnected: boolean;
  isLoading: boolean;
  showForm: boolean;
  textInputMail: string;
  textInputPassword: string;
}

@inject('store')
export default class LogginScreen extends Component<LogginScreenProps, LogginScreenState> {

  state = {
    email: "",
    password: "",
    isConnected: false,
    accounts: [],
    account: null,
    isLoading: false,
    showForm: false,
    textInputMail: "",
    textInputPassword: "",
  }


  componentDidMount() {
    this.setState({ accounts: data.Account });
  }

  onPres = () => {
    this.IsLoginCorrect(this.state.email, this.state.password);
  }

  IsLoginCorrect(email: string, password: string) {


    for (let user of this.state.accounts) {
      if (this.state.email == user.mail) {
        //si le mail est bien le mail mis sur le login, alors connecter l'utilisateur
        //et rentrer ses caractéristique dans Account.
        //this.setState({isConnected:true});
        if (this.state.password == user.password) {

          this.state.account = new Account(user.id, user.mail, user.description, user.password, user.name, user.historique, user.url);

          this.props.store.setAccount(this.state.account);//ici définition de la variable globale
          this.props.onAuthSuccess(this.state.account)

        }
      }
    }
  }


  forgotPassword = () => {
    Alert.alert("Pas très réglo tout ça !","Il est plus sage de noter son mot de passe quelque part ! Désolé mais on ne peut pas vous aider !");
  }

  signUp = () => {
    if (this.state.showForm == false){
      this.setState({showForm: true})
    }
    else {
      this.setState({showForm: false})
    }
  }

  countIdAccounts = () => {
    let compteur =0;
    for (let user of this.state.accounts) {
      compteur =+ 1;
    }
    return compteur
  }
   

  submit = () => {

    //Check for the Name TextInput
    if (this.state.textInputMail = "") {
      Alert.alert('Veuillez entrer une adresse mail!');
      return;
    }
    //Check for the Email TextInput
    if (this.state.textInputPassword== "") {
      Alert.alert('Veuillez entrer un mot de passe');
    }
    

    let accountId=0;
    accountId=this.countIdAccounts()+1

    this.state.account = new Account(accountId,this.state.textInputMail, "",this.state.textInputPassword , "", "", "");

  
    this.props.store.setAccount(this.state.account);//ici définition de la variable globale
    this.props.onAuthSuccess(this.state.account)

  }

  showForm() {
    return(
    <View style={styles.container2}>
        <Text style={styles.logo2}>Enregistrez vous !</Text>
        <TextInput
          placeholder="Email..."
          placeholderTextColor="white"
          onChangeText={
            (value) => this.state.textInputMail=value
          }
          underlineColorAndroid="transparent"
          style={styles.inputView}
        />
        <TextInput
          placeholder="Mot de passe..."
          placeholderTextColor="white"
          onChangeText={
            (value) =>  this.state.textInputPassword=value
          }
          underlineColorAndroid="transparent"
          style={styles.inputView}
        />
         <TouchableOpacity style={styles.loginBtn2}
          onPress={this.submit}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
          
        
        </View>
    )
  }


  render() {

    return (
      
      <View style={styles.container}>
        
        <Text style={styles.logo}>Education App</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="white"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Mot de Passe..."
            placeholderTextColor="white"
            onChangeText={text => this.setState({ password: text })} />
        </View>

        <TouchableOpacity>
          <Text
            style={styles.forgot}
            onPress={this.forgotPassword}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}
          onPress={this.onPres}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.signUp}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

        {this.state.showForm ? this.showForm() : null}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77B5FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex:3,
    backgroundColor: '#77B5FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#bb0b0b",
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo2: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#bb0b0b",
    marginBottom: 10,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#bb0b0b",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginBtn2: {
    width: 100,
    backgroundColor: "#bb0b0b",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});