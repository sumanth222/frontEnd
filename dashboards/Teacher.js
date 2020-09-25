import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Dimensions,
  FlatList,
  Platform

} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import stuBack from "F:/virtusaProject/frontEnd-master/assets/stuBack.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

export default class teacherDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableScrollViewScroll: true,
      data: [
        {
          id: 1,
          title: "Record lecture",
          color: "#f0a500",
          image: "https://img.icons8.com/cotton/64/000000/laptop-webcam.png",
          nav: "webcm",
        },     
        
      ],
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title);
  }

  render() {
    const { navigate } = this.props.navigation;
    const {width,height} = Dimensions.get("window");
    return (
      <ImageBackground style={styles.backgroundCon} source={stuBack}>
        <SafeAreaView>
         
        <View style={styles.container}>

          <View>
            <Text style={styles.title}>Welcome</Text>
          </View>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={Platform.OS === "web" ? 4 : 2}
            scrollEnabled={true}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <View>  
                  <TouchableOpacity
                    style={[styles.card, { backgroundColor: item.color }]}
                    onPress={()=>{navigate(item.nav)}}
                  >
                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>

                  <View style={styles.cardHeader}>
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={[styles.title, { color: item.color }]}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                 
                </View>
              );
            }}
          />
          <TouchableOpacity
                    style={styles.logOut}
                    onPress={()=>{this.props.navigation.goBack(null)}}
                  >
                   <Text style={{color:"#fff"}}>Logout</Text>
                  </TouchableOpacity>
        </View>

        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundCon: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex : 1,
  },
  list: {
   marginTop:"10%",
    paddingHorizontal: 5,
  },
  listContainer: {
    alignItems: "center",
  },

  card: {
    shadowColor: "#474747",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 25,
    marginHorizontal: 40,
    backgroundColor: "#e2e2e2",
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  logOut:{
    flex:1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom:36,
    height:40,
    backgroundColor:"#4c4c4c",
    width: "100%",
    borderRadius: 30,
    
  },
  cardHeader: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 5.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 6,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
  title: {
    fontSize: 19,
    flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
