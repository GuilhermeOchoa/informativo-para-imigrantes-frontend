import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export const CardComponent = () => {
  return (
    <View style={styles.CardContainer}>
      <Text style = {styles.TextStyle}>
        Artigo
      </Text>
    </View>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  CardContainer: {
    width: deviceWidth - 25,
    backgroundColor: '#E1F0C4',
    height: 200,
    borderRadius: 20,

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
    fontWeight: '800',
    paddingTop: 30,
    paddingStart: 30
  }
})