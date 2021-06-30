import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import ExplorerScreen from "../screens/ExplorerScreen";
import LibraryScreen from "../screens/LibraryScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import LoggingScreen from "../screens/LoggingScreen";
import Podcast from "../services/deezer.model";
import Account from "../services/account";
import PodcastScreen from "../screens/PodcastScreen";
import EpisodeScreen from "../screens/EpisodeScreen";
import VideoScreen from "../screens/VideoScreen";
import TrackScreen from "../screens/TrackScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Loggin: undefined;
  Accueil: undefined;
  Explorer: undefined;
  Créer: undefined;
  Bibliothèque: undefined;
  Profil: undefined;
  Video: {
    videoid: string;
    videotitle: string;
    videodescription: string;
    videoimage: string;
  };
  Podcast: {
    podcastid: number;
    podcasttitle: string;
    podcastdescription: string;
  };
  Episode: { episodeid: number; episodetitle: string; episodepicture: string };
  Track: { tracktitle: string; trackpreview: string };
  Account : undefined;
};

export interface NavigationProps {
  navigation: StackNavigationProp<RootStackParamList, any>;
}

// Define view stack inside Accueil tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          title: "Accueil",
        }}
      />
      <HomeStack.Screen name="Track" component={TrackScreen} />
    </HomeStack.Navigator>
  );
};

// Define view stack inside Explorer tab
const ExplorerStack = createStackNavigator<RootStackParamList>();
export const ExplorerStackScreen = () => {
  return (
    <ExplorerStack.Navigator>
      <ExplorerStack.Screen
        name="Explorer"
        component={ExplorerScreen}
        options={{ title: "Explorer" }}
      />
      <ExplorerStack.Screen name="Podcast" component={PodcastScreen} />
      <ExplorerStack.Screen name="Episode" component={EpisodeScreen} />
      <ExplorerStack.Screen name="Video" component={VideoScreen} />
    </ExplorerStack.Navigator>
  );
};

// Define view stack inside Add tab
const AddStack = createStackNavigator<RootStackParamList>();
export const AddStackScreen = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="Créer" component={AddScreen} />
    </AddStack.Navigator>
  );
};

// Define view stack inside Library tab
const LibraryStack = createStackNavigator<RootStackParamList>();
export const LibraryStackScreen = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="Bibliothèque" component={LibraryScreen} />
    </LibraryStack.Navigator>
  );
};

// Define view stack inside MyAccount tab
const MyAccountStack = createStackNavigator<RootStackParamList>();
export const MyAccountStackScreen = () => {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen name="Profil" component={MyAccountScreen} />
    </MyAccountStack.Navigator>
  );
};

// Define view stack inside Loggin tab
const LogginStack = createStackNavigator<RootStackParamList>();
export const LogginStackScreen = () => {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen name="Loggin" component={LoggingScreen} />
    </MyAccountStack.Navigator>
  );
};

export interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Accueil">;
}

export interface ExplorerScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Explorer">;
}

export interface AddScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Créer">;
}

export interface LibraryScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Bibliothèque">;
}

export interface MyAccountScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Profil">;
}

export interface LogginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Loggin">;
}
