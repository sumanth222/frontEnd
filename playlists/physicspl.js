import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
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
        {id:1,  description:"01. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", date:"2019-03-25 09:12:00", color:"#228B22", completed:1},
        {id:2,  description:"02. Aenean massa. Cum sociis natoque penatibus et magnis.",     date:"2019-03-25 10:23:00", color:"#FF00FF", completed:0},
        {id:3,  description:"03. nascetur ridiculus mus. Donec quam felis, ultricies dnec.", date:"2019-03-25 11:45:00", color:"#4B0082", completed:1},
        {id:4,  description:"04. Donec pede justo, fringilla vel, aliquet nec, vulputdate.", date:"2019-03-25 09:27:00", color:"#20B2AA", completed:0},
        {id:5,  description:"05. Nullam dictum felis eu pede mollis pretium. Integer tirr.", date:"2019-03-25 08:13:00", color:"#000080", completed:0},
        {id:6,  description:"06. ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas st.", date:"2019-03-25 10:22:00", color:"#FF4500", completed:1},
        {id:7,  description:"07. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", date:"2019-03-25 13:33:00", color:"#FF0000", completed:0},
        {id:8,  description:"08. Maecenas nec odio et ante tincidunt tempus. Donec vitae .", date:"2019-03-25 11:56:00", color:"#EE82EE", completed:0},
        {id:9,  description:"09. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", date:"2019-03-25 15:00:00", color:"#6A5ACD", completed:0},
        {id:10, description:"10. Aenean imperdiet. Etiam ultricies nisi vel augues aasde.", date:"2019-03-25 12:27:00", color:"#DDA0DD", completed:0},
      ]
    };
  }

  clickEventListener = (item) => {
    Alert.alert("Item selected: "+item.description)
  }

  __getCompletedIcon = (item) => {
    if(item.completed == 1) {
      return "https://img.icons8.com/flat_round/64/000000/checkmark.png";
    } else {
      return "https://img.icons8.com/flat_round/64/000000/delete-sign.png";
    }
  }

  __getDescriptionStyle = (item) => {
    if(item.completed == 1) {
      return {textDecorationLine:"line-through", fontStyle:'italic', color:"#808080"};
    }
  } 

  render() {
    const {width,height} = Dimensions.get("window");
    return (
      <View style={styles.container}>
       
        <Image
          style={{
           height : height/4,
           width : "100%",
          }}
          source = {{uri:"https://www.freepik.com/premium-vector/scientific-formulas-calculations-physics-mathematics_2190060.htm#page=1&query=physics&position=23"}}  
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
            <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: "https://img.icons8.com/flat_round/64/000000/play--v1.png"}}/>
              <View style={styles.cardContent}>
                <Text>{item.description}</Text>
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
    backgroundColor:"#557571"
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
    backgroundColor:"white",
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