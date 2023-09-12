import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from '@components/carousel/styles';
import { CarouselMenu } from '@components/CarouselMenu';

import flag_br from '@assets/flag_br.png';
import logo from '@assets/logo.png';
import onboardingImg01 from '@assets/onboarding_img01.png';
import onboardingImg02 from '@assets/onboarding_img02.png';
import onboardingImg03 from '@assets/onboarding_img03.png';

const { width: screenWidth } = Dimensions.get('window');

interface ItemProps {
  title: string;
  text: string;
  image: any;
}

interface State {
  activeIndex: number;
  carouselItems: ItemProps[];
}

class Onboarding extends Component<any, State> {
  ref = React.createRef<any>();
  state = {
    activeIndex: 0,
    carouselItems: [
      {
        title: "Bem-vindo(a)",
        text: "Antes de começar, vamos apresentar o aplicativo para que você possa aproveitá-lo ao máximo.",
        image: logo,
      },
      {
        title: "Estamos aqui para ajudar",
        text: "Aqui você vai encontrar oportunidades educacionais e de crescimento pessoal, para ajudar na sua nova vida.",
        image: onboardingImg01,
      },
      {
        title: "Proteção de dados",
        text: "Jamais guardaremos qualquer tipo de dado seu. Você continuará anônimo, pelo tempo que desejar.",
        image: onboardingImg02,
      },
      {
        title: "Tudo pronto!",
        text: "Toque na tela ou deslize para a esquerda para começar a utilizar o aplicativo.",
        image: onboardingImg03,
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
              <Image source={flag_br} style={styles.squareImage} />
            </View>
          </View>
        </View>
        <Carousel
          layout={"default"}
          ref={this.ref}
          data={this.state.carouselItems}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          snapToAlignment={"end"}
          renderItem={({ item, index }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <View style={styles.squareContainer}>
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
        <CarouselMenu
          activeIndex={this.state.activeIndex}
          onMenuItemPress={this._goToSlide.bind(this)}
          itemCount={this.state.carouselItems.length}
        />
      </SafeAreaView>
    );
  }

  _goToSlide(index: number) {
    this.ref.current.snapToItem(index);
  }
}

export default Onboarding;