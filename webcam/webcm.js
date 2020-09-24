import React, { useRef, useEffect, Component } from "react";

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
  Dimensions,
  Picker,
  ImageBackground,
} from "react-native";
import Webcam from "react-webcam";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

var ReactDOM = require('react-dom');



const webcm = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const videoConstraints = {
    width: 1280,
    height: 720
  };
  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);
  
  const {width,height} = Dimensions.get("window");
  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/mp4"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.mp4";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
    
  }, [recordedChunks]);


  return (
    
    <>
    <View style={{flex:1,alignItems:"center",justifyContent:"center",background:"#4c4c4c"}}>
      {capturing?(
        <View style={{flexDirection:"row",marginBottom:5}}>
          <Image
                  style={styles.inputIcon}
                  source={{
                    uri: "https://img.icons8.com/flat_round/64/000000/record.png",
                  }}
                />
                
      <Text style={{color:"#fff",fontSize:15}}>Recording...</Text>
      </View>):<Text></Text>}
      <Webcam audio={true} ref={webcamRef}/>
      
      {capturing ? (
        <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleStopCaptureClick}
      >
        <Text style={styles.loginText}>Stop Recording</Text>
      </TouchableHighlight>
      ) : (
        
        <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={handleStartCaptureClick}
            >
              <View>
              <Text style={styles.loginText}>Start Record</Text>
                </View>
            </TouchableHighlight>
            
      )}
      {recordedChunks.length > 0 && (
        
        <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={handleDownload}
            >
              <Text style={styles.loginText}>Download</Text>
            </TouchableHighlight>
           
        
      )}
      </View>
    </>
  );
};
export default webcm;
ReactDOM.render(<webcm />, document.getElementById("root"));

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
