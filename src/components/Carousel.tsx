import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./carousel/styles"; // Certifique-se de importar os estilos apropriados

interface CarouselMenuProps {
  activeIndex: number;
  onMenuItemPress: (index: number) => void;
  itemCount: number;
}

export function CarouselMenu({
    activeIndex,
    onMenuItemPress,
    itemCount}
    CarouselMenuProps) => {return (
        <View style={styles.menuContainer}>
          {Array.from({ length: itemCount }).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onMenuItemPress(index)}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                marginTop: -30,
                backgroundColor: index === activeIndex ? "blue" : "gray",
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{index + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };

export default CarouselMenu;