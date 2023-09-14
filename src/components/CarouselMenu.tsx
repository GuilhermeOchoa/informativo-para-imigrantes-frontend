import React from "react";
import { TouchableOpacity, Text, View, StyleSheet  } from "react-native";

interface CarouselMenuProps {
  activeIndex: number;
  onMenuItemPress: (index: number) => void;
  itemCount: number;
}

export function CarouselMenu({activeIndex,onMenuItemPress,itemCount}: CarouselMenuProps) {
  return (
    <View style={styles.menuContainer}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onMenuItemPress(index)}
          style={[
            styles.menuItem,
            {
              backgroundColor:
                index === activeIndex ? "#55917F" : "#5E4C5A",
            },
          ]}
        >
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginBottom:45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  menuItem: {
    width: 10,
    height: 10,
    borderRadius: 15,
    marginTop: -30,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  menuItemText: {
    color: "white",
  },
});