import React, { useRef, useEffect, Component } from "react";
import Carousel from 'react-native-snap-carousel';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert,
  Picker,
  ImageBackground,
  Dimensions,
} from "react-native";
import log from "./screens/login";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const axios = require("axios").default;
let te = "";
let toGo = "";
let stu = "STUDENT";
let tea = "TEACHER";
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 7000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

import minBack from "./assets/minBack.jpg";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    role: "",
    data: "",
    activeIndex:0,
    carouselItems: [
    {
        title:"https://image.freepik.com/free-vector/group-students-watching-online-webinar_74855-5514.jpg",
        text: "Welcome to the world of E-learning",
        color:"#fff"
    },
    {
        title:"https://image.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg",
        text: "One on one interactions",
        color:"#000000"
    },
    {
        title:"https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg",
        text: "Top quality faculty!",
        color:"#fff"
    },
    {
        title:"https://image.freepik.com/free-vector/woman-with-long-hair-teaching-online_23-2148508674.jpg",
        text: "Instant doubt clarification!",
        color:"#000000"
    },
    {
        title:"https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg",
        text: "Learn from the best!",
        color:"#fff"
    },
    {
      title:"https://image.freepik.com/free-vector/online-test-isometric-color-vector-illustration_151150-174.jpg",
      text: "Take tests online!",
      color:"#000000"
  },
  ]
  };

  updateRole = (role) => {
    this.setState({ role: role });
  };

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  loginUser (){
    const { email } = this.state;
    const { password } = this.state;
    const { role } = this.state;

    let myitems = {
      email: email,
      password: password,
      role: role,
    };

    axios
      .post("http://192.168.0.102:8080/loginUser", {
        userName: email,
        password: password,
      })
      .then(function (response) {
        toGo = response.data;       
        //console.log(toGo);
        if (toGo != "STUDENT" && toGo != "TEACHER") {
          alert("Invalid credentials!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  _renderItem({item,index}){
    const {width,height} = Dimensions.get("screen");
    return (
      <View style={{
          backgroundColor:'floralwhite',
          borderRadius: 5,
          height: 250,
          alignItems:"center",
          justifyContent:"center",
          padding: 50,
          marginLeft: 25,
          marginRight: 25, }}>
        <Image style={{width:650,height:270}} source={{uri: item.title}}/>
        <Text style={{color:item.color,marginTop:18,fontSize:20}}><strong>{item.text}</strong></Text>
      </View>

    )
}

  render() {
    const { navigate } = this.props.navigation;
    const {width,height} = Dimensions.get("screen");
    return (
      <NavigationContainer>
        <ImageBackground style={styles.backgroundCon} source={minBack}>
          <FadeInView>
          <Text style={{fontSize:40,color:"#fff",marginTop:50}}>Login or signup to get started!</Text>
          </FadeInView>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center'}}>
        <View style={{ marginTop:"18%",marginRight:"5%"}}>
                <Carousel
                  layout={"stack"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={width/2}
                  sliderHeight={1000}
                  itemWidth={700}
                  itemHeight={1000}
                  autoplay={true}
                  loop={true}
                  activeSlideAlignment={"center"}
                  inactiveSlideOpacity={10}
                  backgroundColor={"#fff"}
                  enableMomentum={false}
                  lockScrollWhileSnapping={true}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          <View style={styles.container}>
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Enter username"
                  underlineColorAndroid="transparent"
                  onChangeText={(email) => this.setState({ email })}
                />
                <Image
                  style={styles.inputIcon}
                  source={{
                    uri:
                      "https://img.icons8.com/cotton/64/000000/user-male--v1.png",
                  }}
                />
              </View>
              
            </View>

            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Enter password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  onChangeText={(password) => this.setState({ password })}
                />
                <Image
                  style={styles.inputIcon}
                  source={{
                    uri: "https://img.icons8.com/cotton/64/000000/key--v2.png",
                  }}
                />
              </View>
            </View>

            <View>
              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => {

                  this.loginUser()
                  if (toGo === "STUDENT") {                    
                    navigate("student");
                  }
                  if (toGo === "TEACHER") {
                    navigate("teacher");
                  }
                }}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableHighlight>
            </View>

            <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => navigate("Registration")}
            >
              <Text style={styles.loginText}>Sign up</Text>
            </TouchableHighlight>

            <Image
              style={styles.mountain}
              source={{
                uri:
                  "https://p7.hiclipart.com/preview/393/544/1015/cypress-mountain-ski-area-computer-icons-snow-others.jpg",
              }}
            />
          </View>
          </View>
        </ImageBackground>
      </NavigationContainer>
    );
  }
}

const resizeMode = "center";

const styles = StyleSheet.create({
  backgroundCon: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },

  loginButton: {
    backgroundColor: "#00b5ec",
    marginTop: 5,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  cloud1: {
    height: 60,
    width: 60,
    marginBottom: 40,
    flexDirection: "row-reverse",
  },
  edIcon: {
    height: 50,
    width: 50,
    marginBottom: 24,
  },
  pick: {
    width: 300,
    height: 40,
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
});
