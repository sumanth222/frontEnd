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
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import stuBack from "E:/Ps3Games/index-master/assets/stuBack.jpg";

export default class studentDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Physics",
          color: "#f0a500",
          image: "https://www.flaticon.com/svg/static/icons/svg/2933/2933803.svg",
          nav: "physics",
        },
        {
          id: 2,
          title: "Physics",
          color: "#f0a500",
          image: "https://www.flaticon.com/svg/static/icons/svg/2933/2933803.svg",
          nav: "physics",
        },
        
      ],
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.backgroundCon} source={stuBack}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Student DashBoard</Text>
          </View>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
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
        </View>
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
    flex: 1,
  },
  list: {
    marginTop: "30%",
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
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
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
    fontSize: 24,
    flex: 1,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
