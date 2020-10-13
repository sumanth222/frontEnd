import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import exam_details from "./exam_details";
import exam from "./exam";
import questions_input from "./questions_input";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  View, 
  TouchableOpacity,
} from 'react-native';
import NavigationBar from 'react-native-navbar'; 

function addMcq() {
  return (
    <Router>
      <div className="App">
        
          <NavigationBar
          tintColor="#686d76"
          statusBar
           leftButton={
          <Link className="navbar-brand" to={"/exam_details"}>
            <Text style={{fontSize:30,color:"#fff"}}>
              <strong>Exam Details</strong>
              </Text>
            </Link>
           }
            
           title={
            <Link className="navbar-brand" to={"/exam"}>
              <Text style={{fontSize:30,color:"#fff"}}>
              <strong>Exam</strong>
              </Text>
            </Link>
            }
            rightButton={
            <Link className="navbar-brand" to={"/questions_input"}>
              <Text style={{fontSize:30,color:"#fff"}}>
              <strong>Question Input</strong>
              </Text>
            </Link>
            }>
          </NavigationBar>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/exam" component={exam} />
              <Route path="/exam_details" component={exam_details} />
              <Route path="/questions_input" component={questions_input} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default addMcq;