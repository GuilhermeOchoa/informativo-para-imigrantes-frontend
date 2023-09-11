import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";

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
        title: "Bem-vindo(a)",
        text: "Antes de começar, vamos apresentar o aplicativo para que você possa aproveitá-lo ao máximo.",
        image: require("./mocks/logo.png"),
      },
      {
        title: "Estamos aqui para ajudar",
        text: " Aqui você vai encontrar oportunidades educacionais e de crescimento pessoal, para ajudar na sua nova vida.",
        image: require("./mocks/image02.png"),
      },
      {
        title: " Proteção de dados",
        text: " Jamais guardaremos qualquer tipo de dado seu. Você continuará anônimo, pelo tempo que desejar.",
        image: require("./mocks/image03.png"),
      },
      {
        title: "Tudo pronto!",
        text: " Toque na tela ou deslize para a esquerda para começar a utilizar o aplicativo.",
        image: require("./mocks/image04.png"),
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
         <View style={styles.headerContainer}>
                    <View style={styles.languageText}>
                        <Text>Português (Brasil)</Text>
                        <View style={styles.flagIcon}>
                            <Image source={require('./mocks/brasil.png')} style={styles.squareImage} />
                        </View>
                    </View>
                </View>
        <View >
          <Carousel
            layout={"default"}
            ref={this.ref}
            data={this.state.carouselItems}
            sliderWidth={400}
            itemWidth={380}
            renderItem={({ item, index }) => ( 
              <View style={styles.headerContainer} >
                  <Text style={styles.titleText}>{item.title}</Text>
                <View style={styles.squareContainer}
                >
                  <Image source={item.image} style={styles.squareImage} />
                </View>
                  
                <View style={styles.textContainer}>
                  <Text style={styles.messageText}>{item.text}</Text>
                </View>
              </View>
            )}
            onSnapToItem={(index: number) => this.setState({ activeIndex: index })}
            shouldOptimizeUpdates={true}
          />
        </View>

      {/* Menu Visual - Números */}
      <View style={styles.menuContainer}>
          {this.state.carouselItems.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this._goToSlide(index)}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                marginTop:-30,
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
