import { processFontFamily } from "expo-font";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

interface CardProps {
  description: string;
}

export const CardComponent: React.FC<CardProps>  = ({ description }) => {
  return (
    <View style={styles.CardContainer}>
      <Text style = {styles.TextStyle}>
        {description}
      </Text>
    </View>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  CardContainer: {
    width: deviceWidth - 25,
    backgroundColor: '#E1F0C4',
    height: 134,
    borderRadius: 20,
    marginTop:30,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.75,
    elevation: 9
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 15,
    paddingStart: 15

  }
})