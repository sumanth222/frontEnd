import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Dimensions,Image,Button,ScrollView } from 'react-native';
import {Video} from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class physicsScreen extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      screenType: 'content',
    };
  }

 

  render() {
      const {width,height} = Dimensions.get("window");
    return (
        
    
      <View style={styles.container}>
         
       <Video
  source={{ uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  useNativeControls={true}
  volume={1.0}
  isMuted={false}
  resizeMode={Video.RESIZE_MODE_CONTAIN}
  shouldPlay
  isLooping
  style={{ width: "100%", height: height/2 + 50}}
/>
<Button
  onPress={() => this.props.navigation.goBack(null)}
  title="Back to playlist"
  color="#841584"
  borderRadius= "20"
  accessibilityLabel="Learn more about this purple button"
/>
<Text style={{fontSize: 30,marginTop:20,color:"#ffffff",fontWeight:"bold"}}>Physics Lecture</Text>
<ScrollView>
<Text style={{fontSize:20,color:"#ffffff",marginLeft:"5%",marginRight:"5%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
</ScrollView>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#4c4c4c",
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});