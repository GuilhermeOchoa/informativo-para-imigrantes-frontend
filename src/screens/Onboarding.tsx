import React, { Component, useState } from "react";
import { SafeAreaView, Dimensions, StyleSheet } from "react-native";
import { Text, View, Image, useToast } from 'native-base';
import Carousel from "react-native-snap-carousel";
import { CarouselMenu } from "@components/CarouselMenu";
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { TextDTO} from '@dtos/TextDTO';
import { getText } from '@services/Texts';
import { AppError } from '@utils/AppError';


import flag_br from "@assets/flag_br.png";
import logo from "@assets/logo.png";
import onboardingImg01 from "@assets/onboarding_img01.png";
import onboardingImg02 from "@assets/onboarding_img02.png";
import onboardingImg03 from "@assets/onboarding_img03.png";

const { width: screenWidth } = Dimensions.get("window");

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
        text: "Aqui, tentaremos lhe oferecer as melhores e mais facilitadoras ferramentas para lhe auxiliar.",
        image: logo,
      },
      {
        title: "Estamos aqui para ajudar",
        text: "Esta aplicação oferece a possibilidade de organizar e sistematizar a oferta educativa por instituição, opção acadêmica e localização.",
        image: onboardingImg01,
      },
      {
        title: "Exatamente o que você esperava!",
        text: "Agradecemos pelo seu voto de confiança. E lembre-se: em caso de dúvidas, nossa equipe estará à disposição via contato online. ",
        image: onboardingImg02,
      },
      {
        title: "Tudo pronto!",
        text: "Agora, nas próximas telas, iniciará um breve tutorial sobre as opções dentro da aplicação e como utilizá-las.",
        image: onboardingImg03,
      },
    ],
  };

  render() {
    const { activeIndex, carouselItems } = this.state;
    const isLastSlide = activeIndex === carouselItems.length - 1;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.languageText}>
          <Text>Português (Brasil)</Text>
          <View style={styles.flagIcon}>
            <Image source={flag_br} style={styles.squareImage} />
          </View>
        </View>
        <Carousel
          layout={"default"}
          ref={this.ref}
          data={carouselItems}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          enableMomentum={true}
          decelerationRate={0.9}
          snapToAlignment={"end"}
          renderItem={({ item, index }) => (
            <View style={styles.screenContainer}>
              {index === 0 ? (
                <View>
                  <View style={styles.topContainer}>
                    <Text style={styles.welcomeText}>{item.title}</Text>
                  </View>
                  <View style={styles.logoImage}>
                    <Image source={logo} alt=''/>
                  </View>
                  <View style={styles.appTittleContainer}>
                    <Text style={styles.appNameText}>ERI</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.introText}>
                      Antes de começar, vamos apresentar o aplicativo para que
                      você possa aproveitá-lo ao máximo.
                    </Text>
                  </View>
                </View>
              ) : (
                <>
                  <View>
                    <View style={styles.topContainer}>
                      <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                    <View style={styles.squareContainer}>
                      <Image source={item.image} style={styles.squareImage} alt=''/>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.messageText}>
                        {item.text}
                      </Text>
                    </View>
                  </View>
                </>
              )}
            </View>
          )}
          onSnapToItem={(index: number) =>
            this.setState({ activeIndex: index })
          }
          shouldOptimizeUpdates={true}
        />
        {isLastSlide ? (
            <Button
              title="Mais Informações"
              style={styles.button}
              onPress={() => {
              }}
            />
        ) : (
          <CarouselMenu
            activeIndex={activeIndex}
            onMenuItemPress={this._goToSlide.bind(this)}
            itemCount={carouselItems.length}
          />
        )}
      </SafeAreaView>
    );
  }

  _goToSlide(index: number) {
    this.ref.current.snapToItem(index);
  }
}

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    flex: 1,
    
  },
  squareContainer: {
    width: 370,
    height: 350,
    backgroundColor: '#55917F',
    borderRadius: 90,
    alignSelf: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 0,
    marginTop: -10
  },
  headerContainer: {
    paddingHorizontal: 12,
    paddingBottom: 50,
 //   backgroundColor: 'orange', //visualizar containers
  },
  screenContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  //  backgroundColor: 'red', //visualizar containers
  },
  textContainer: {
    marginTop: 32,
    height: 140,
    width: '100%',
 //   backgroundColor: 'green', //visualizar containers
  },
  topContainer: {
    padding: 0,
    height: 100,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
 //   backgroundColor: 'yellow', //visualizar containers

  },
  appTittleContainer: {
    padding: 0,
    paddingTop: 20,
    height: 100,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  //  backgroundColor: 'yellow', //visualizar containers
  },
  logoImage: {
    alignItems: 'center',
 //   backgroundColor: 'purple', //visualizar containers
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#55917F',
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom:45,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 5,
  },
  messageText: {
    fontSize: 24,
    color: '#000',
    opacity: 0.5,
    lineHeight: 22,
    marginVertical: 8,
    marginHorizontal: 8,
    textAlign: 'center',        
  },
  squareImage: {
    height: '100%',
    width: '100%',
  },
  flagIcon: {
    width: 22,
    height: 22,
  },
  languageText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 12,
    paddingBottom: 50,
   // backgroundColor: 'orange', //visualizar containers
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    lineHeight: 30,
  },
  appNameText: {
    fontSize: 22,
    marginTop: 12,
  },
  introText: {
    fontSize: 24,
    color: '#000',
    opacity: 0.6,
    lineHeight: 24,
    marginHorizontal: 5,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
