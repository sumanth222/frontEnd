import React, { Component } from "react";
//import react in our code.

//Import react-navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./firstScreen";
import Registration from "./SecondPage";
import studentDash from "./dashboards/Student";
import teacherDash from "./dashboards/Teacher";
import SplashScreen from "./screens/splashScreen";
import physicsScreen from './Subjects/physics';
import physicsPlaylist from "./playlists/physicspl";
import webcm from "./webcam/webcm";
import App1 from "./addQuestion";
import App2 from "./test";
import chatRoom from "./chat/chatRoom";
import chatRoom1 from "./chat/chatRoom1";

//import all the screens we are going to switch
const App = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    SplashScreen: { screen: SplashScreen,navigationOptions: {header: null,} },
    Login: { screen: Login,navigationOptions: {header: null,}  },
    Registration: { screen: Registration,navigationOptions: {header: null,}  },
    student: { screen: studentDash,navigationOptions: {header: null,}  },
    physics : {screen : physicsScreen,navigationOptions: {header: null,} },
    physicsPlaylist : {screen : physicsPlaylist,navigationOptions: {header: null,} },
    teacher: { screen: teacherDash,navigationOptions: {header: null,}  },
    App1 : {screen : App1,navigationOptions:{title: "Go back"}},
    App2: {screen : App2,navigationOptions:{title: "Go back"}},
    webcm:{screen : webcm},
    chatRoom : {screen : chatRoom,navigationOptions:{title: "Leave chat"}},
    chatRoom1 : {screen : chatRoom1,navigationOptions:{title: "Leave chat"}}

    //First entry by default be our first screen if we do not define initialRouteName
  },  
  {
    initialRouteName: "SplashScreen",
  }
);
export default createAppContainer(App);
