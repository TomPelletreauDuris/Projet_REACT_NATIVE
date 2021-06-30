import React from "react";
import { TabNavigator } from "./navigation/tab_navigation";
import LogginScreen from "./screens/LoggingScreen";
import { RouteProp } from "@react-navigation/core";
import { RootStackParamList, NavigationProps } from "./navigation/app_stacks";
import Account from "./services/account";
import { Provider} from "mobx-react";
import {AppStore} from "./store/appStore";

const store = new AppStore;

interface AppState {
  currentAccount: Account | null;
};

interface AppProps extends NavigationProps {
  route: RouteProp<RootStackParamList, "Accueil">;
  account: Account;
};

//@inject('store') store.this.props.

export default class App extends React.Component<{},AppState> {
  state: AppState = {
    currentAccount: null,
  };

  updateCurrentAccount = (loggedAccount: Account) => {
    this.setState({ currentAccount: loggedAccount });
  };

  render() {
    //creer un Login Screen ou juste le TabNavigator
    //selon si l'utilisateur est connecté ou non
    const logginScreen = !this.state.currentAccount ? (
      <LogginScreen onAuthSuccess={this.updateCurrentAccount} />
      ) : null;
      const tabNavigator = this.state.currentAccount ? <TabNavigator/> : null;

    return (
      <Provider store={store}>
        {logginScreen}
        {tabNavigator}
      </Provider>
      
    )
  }
  
}
