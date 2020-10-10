import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';

export default class physicsPlaylist extends Component {

  constructor(props) {
    super(props);
    this.state = {

      data: [
        {id:1,  description:"Physics Lecture 01", color:"#228B22",nav:"physics"},
        {id:2,  description:"Physics Lecture 02", color:"#FF00FF",nav:"physics"},
        {id:3,  description:"Physics Lecture 03", color:"#4B0082",nav:"physics"},
        {id:4,  description:"Physics Lecture 04",color:"#20B2AA",nav:"physics"},
        {id:5,  description:"Physics Lecture 05",color:"#000080",nav:"physics"},
        {id:6,  description:"Physics Lecture 06",color:"#FF4500",nav:"physics"},
        {id:7,  description:"Physics Lecture 07",color:"#FF0000",nav:"physics"},
        {id:8,  description:"Physics Lecture 08",color:"#EE82EE",nav:"physics"},
        {id:9,  description:"Physics Lecture 09",color:"#6A5ACD",nav:"physics"},
        {id:10, description:"Physics Lecture 10",color:"#DDA0DD",nav:"physics"},
      ]
    };
  }

  clickEventListener = (item) => {
    navigate(item.nav)
  }

  render() {
    const {navigate} = this.props.navigation;
    const {width,height} = Dimensions.get("window");
    return (
      <View style={styles.container}>
       
        <Image
          style={{
           height : height/4,
           width : "100%",
          }}
          resizeMode="contain"
          source = {require("F:/virtusaProject/frontEnd-master/assets/tpi.jpg")}  
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Back to courses"
          color="#841584"
          borderRadius= "20"
          accessibilityLabel="Learn more about this purple button"
          />
        <FlatList 
          style={styles.tasks}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {navigate("physics")}}>
              <Image style={styles.image} source={{uri: "https://img.icons8.com/flat_round/64/000000/play--v1.png"}}/>
              <View style={styles.cardContent}>
                <Text style={{color:"#ffffff"}}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#d9c6a5"
  },
  tasks:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10,
  },
  image:{
    width:25,
    height:25,
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"#52575d",
    padding: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    borderLeftWidth:6,
    borderRadius: 20,
  },

  description:{
    fontSize:18,
    flex:1,
    color:"#008080",
    fontWeight:'bold',
  },
  date:{
    fontSize:14,
    flex:1,
    color:"#696969",
    marginTop:5
  },
}); 