import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

interface ItemProps {
  title: string;
  text: string;
  image: any;
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
        image: require("./images/test.jpg"),
      },
      {
        title: "Item 2",
        text: "Text 2",
        image: require("./images/test2.jpg"),
      },
      {
        title: "Item 3",
        text: "Text 3",
        image: require("./images/test3.jpg"),
      },
      {
        title: "Item 4",
        text: "Text 4",
        image: require("./images/test4.jpg"),
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
        <View style={{ justifyContent: "center" }}>
          <Carousel
            layout={"default"}
            ref={this.ref}
            data={this.state.carouselItems}
            sliderWidth={400}
            itemWidth={380}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <View
                  style={{
                   
                    
                    marginTop: 200,
                   marginLeft:10,
                   marginRight:10,
                  
                    paddingRight:20,
                    
                  }}
                >
                  <Image source={item.image} style={{ width: 260, height: 260, borderRadius: 20 }} />
                </View>
                <View style={{ marginTop: 50, alignItems: "center"}}>
                  <Text>{item.text}</Text>
                </View>
              </View>
            )}
            onSnapToItem={(index: number) => this.setState({ activeIndex: index })}
            shouldOptimizeUpdates={true}
          />
        </View>

        {/* Menu Visual - Números */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
          {this.state.carouselItems.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this._goToSlide(index)}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                marginTop:50,
                backgroundColor: index === this.state.activeIndex ? "blue" : "gray",
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>{index + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }

  _goToSlide(index: number) {
    this.ref.current.snapToItem(index);
  }
}

export default CustomCarousel;