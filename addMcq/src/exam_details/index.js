import React, { Component } from "react";
import "./index.css";
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

export default class exam_details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      sname: "",
      dates: "",
      stime: "",
      etime: "",
    };
  }

  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlesubmit = (event) => {
    alert(`user name is ${this.state.uname}. 
         subject name is ${this.state.sname}
         date of test ${this.state.dates}.
         start time ${this.state.stime}
         end time ${this.state.etime}
         `);
    console.log(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <div className="examDetailsContainer">
        <div className="card-header">
          <Text style={{fontSize:40}}>Enter Test Details Below</Text>
        </div>
        <View style={{flex:2,flexDirection:'column',justifyContent:"space-evenly",backgroundColor:"#cdc9c3"}}>
          <form onSubmit={this.handlesubmit}>
            <View style={{marginTop:20}}>
              <Text><strong>User name</strong></Text>
              <TextInput
              style={{marginLeft:30,backgroundColor:"#fff",borderRadius:10,width:"90%",height:40}}
                name="uname"
                value={this.state.uname}
                onChange={this.handlechangeall}
                placeholder="Username"
              />
            </View>
            <View style={{marginTop:20}}>
              <Text><strong>Subject name</strong></Text>
              <TextInput
              style={{marginLeft:30,backgroundColor:"#fff",borderRadius:10,height:40,width:"90%"}}
                name="sname"
                value={this.state.sname}
                onChange={this.handlechangeall}
                placeholder="ex:- Physics"
              />
            </View>
            <View style={{marginTop:20}}>
              <Text><strong>Date</strong></Text>
              <input
                type="Date"
                className="form-control"
                name="dates"
                value={this.state.dates}
                onChange={this.handlechangeall}
                placeholder="DD/MM/YY"
                width="90%"
              />
            </View>
            <View style={{marginTop:20}}>
              <Text><strong>Start Time</strong></Text>
              <input
                type="time"
                className="form-control"
                name="stime"
                value={this.state.stime}
                onChange={this.handlechangeall}
                placeholder="HH:MM"
              />
            </View>
            <View style={{marginTop:20}}>
              <Text><strong>End Time</strong></Text>
              <input
                type="time"
                className="form-control"
                name="etime"
                value={this.state.etime}
                onChange={this.handlechangeall}
                placeholder="HH:MM"
              />
            </View>
            <button type="submit" className="btn btn-primary btn-block">
              Continue To Upload
            </button>
          </form>
        </View>
      </div>
    );
  }
}
