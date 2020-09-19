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
        {id:1,  description:"01. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", color:"#228B22",nav:"physics"},
        {id:2,  description:"02. Aenean massa. Cum sociis natoque penatibus et magnis.", color:"#FF00FF",nav:"physics"},
        {id:3,  description:"03. nascetur ridiculus mus. Donec quam felis, ultricies dnec.", color:"#4B0082",nav:"physics"},
        {id:4,  description:"04. Donec pede justo, fringilla vel, aliquet nec, vulputdate.",color:"#20B2AA",nav:"physics"},
        {id:5,  description:"05. Nullam dictum felis eu pede mollis pretium. Integer tirr.",color:"#000080",nav:"physics"},
        {id:6,  description:"06. ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas st.",color:"#FF4500",nav:"physics"},
        {id:7,  description:"07. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",color:"#FF0000",nav:"physics"},
        {id:8,  description:"08. Maecenas nec odio et ante tincidunt tempus. Donec vitae .",color:"#EE82EE",nav:"physics"},
        {id:9,  description:"09. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",color:"#6A5ACD",nav:"physics"},
        {id:10, description:"10. Aenean imperdiet. Etiam ultricies nisi vel augues aasde.",color:"#DDA0DD",nav:"physics"},
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
          onPress={() => this.props.navigation.goBack(null)}
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
    backgroundColor:"#000000"
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
    backgroundColor:"#4c4c4c",
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