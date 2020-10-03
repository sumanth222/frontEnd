import React from 'react'
import {Text,TextInput,StyleSheet} from "react-native";

export default ({ name, message }) =>
  <p>
    <Text>
    <strong>{name}</strong> <em>{message}</em>
    </Text>
  </p>

  

