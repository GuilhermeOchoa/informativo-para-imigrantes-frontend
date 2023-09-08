import React, { Component } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

interface ItemProps {
  title: string;
  text: string;
  image: any; // Altere o tipo de imagem para qualquer
}

interface State {
  activeIndex: number;
  carouselItems: ItemProps[];
}

class CustomCarousel extends Component<any, State> {
  ref = React.createRef<any>();
  state = {
    activeIndex: 0,
    carouselItems: [
      {
        title: "Item 1",
        text: "Text 1",
        image: require("./images/test.jpg"), // Caminho da imagem par"a o Item 1
      },
      {
        title: "Item 2",
        text: "Text 2",
        image: require("./images/test2.jpg"), // Caminho da imagem para o Item 2
      },
      {
        title: "Item 3",
        text: "Text 3",
        image: require("./images/test3.jpg"), // Caminho da imagem para o Item 3
      },
      {
        title: "Item 4",
        text: "Text 4",
        image: require("./images/test4.jpg"), // Caminho da imagem para o Item 4
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#FCFCFC", paddingTop: 50, paddingLeft: 40, marginTop: 80 }}>
        <View style={{ justifyContent: "center" }}>
          <Carousel
            layout={"default"}
            ref={this.ref}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <View
                  style={{
                    borderRadius: 10,
                 
                    padding: 20,
                    marginTop: 100,
                    marginLeft: 25,
                    marginRight: 25,
                  }}
                >
                  {/* Renderize a imagem do item */}
                  <Image source={item.image} style={{ width: 300, height: 300, borderRadius: 20 }} />
                </View>
                <View style={{ marginTop: 50, alignItems: "center",marginHorizontal: 20 }}>
                  {/* Renderize o texto do item */}
                  <Text>{item.text}</Text>
                </View>
              </View>
            )}
            
            onSnapToItem={(index: number) => this.setState({ activeIndex: index })}
            shouldOptimizeUpdates={true}
            
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default CustomCarousel;