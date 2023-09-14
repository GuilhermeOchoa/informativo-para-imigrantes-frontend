import React, { useState, useEffect } from "react";
import { SafeAreaView, Dimensions, StyleSheet } from "react-native";
import { Text, View, Image, useToast } from "native-base";
import Carousel from "react-native-snap-carousel";
import { CarouselMenu } from "@components/CarouselMenu";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Button } from "@components/Button";
import { TextDTO } from "@dtos/TextDTO";
import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';


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

interface CarouselProps {
  navigation: NavigationProp<any, any>;
}

export function CarouselSlides({ navigation }: CarouselProps): JSX.Element {
  function handleNavigate() {
		navigation.navigate('secondPage');
	}

  const { t, i18n } = useTranslation();
  const ref = React.createRef<any>();
  const [activeIndex, setActiveIndex] = useState(0);

  
  const [carouselItems, setCarouselItems] = useState<ItemProps[]>([
    {
      title: t("OnboardingTitle01"),
      text: t("OnboardingText01"),
      image: logo,
    },
    {
      title: t("OnboardingTitle02"),
      text: t("OnboardingText02"),
      image: onboardingImg01,
    },
    {
      title: t("OnboardingTitle03"),
      text: t("OnboardingText03"),
      image: onboardingImg02,
    },
    {
      title: t("OnboardingTitle04"),
      text: t("OnboardingText04"),
      image: onboardingImg03,
    },
  ]);
  useEffect(() => {
    setCarouselItems([
      {
        title: t("OnboardingTitle01"),
        text: t("OnboardingText01"),
        image: logo,
      },
      {
        title: t("OnboardingTitle02"),
        text: t("OnboardingText02"),
        image: onboardingImg01,
      },
      {
        title: t("OnboardingTitle03"),
        text: t("OnboardingText03"),
        image: onboardingImg02,
      },
      {
        title: t("OnboardingTitle04"),
        text: t("OnboardingText04"),
        image: onboardingImg03,
      },
    ]);
  }, [i18n.language]);

  const isLastSlide = activeIndex === carouselItems.length - 1;

  const _goToSlide = (index: number) => {
    ref.current.snapToItem(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        layout={"default"}
        ref={ref}
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
                <View style={styles.topContainerWelcome}>
                  <Text style={styles.welcomeText}>{item.title}</Text>
                </View>
                <View style={styles.logoImage}>
                  <Image source={item.image} alt="" />
                </View>
                <View style={styles.appTittleContainer}>
                  <Text style={styles.appNameText}>Nome do Aplicativo</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.introText}>{item.text}</Text>
                </View>
              </View>
            ) : (
              <>
                <View>
                  <View style={styles.topContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </View>
                  <View style={styles.squareContainer}>
                    <Image source={item.image} style={styles.squareImage} alt="" />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.messageText}>{item.text}</Text>
                  </View>
                </View>
              </>
            )}
          </View>
        )}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        shouldOptimizeUpdates={true}
      />
      {isLastSlide ? (
        <Button
          title={t("MaisInformacoes")}
          style={styles.button}
          onPress={handleNavigate}
        />
      ) : (
        <CarouselMenu
          activeIndex={activeIndex}
          onMenuItemPress={_goToSlide}
          itemCount={carouselItems.length}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    padding: 0,
    margin: 0,
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    flex: 1,
  },
  squareContainer: {
    width: 370,
    height: 350,
    backgroundColor: "#55917F",
    borderRadius: 90,
    alignSelf: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 0,
    marginTop: -10,
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
    width: "100%",
   //    backgroundColor: 'green', //visualizar containers
  },
  topContainer: {
    height: 80,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  //   backgroundColor: 'yellow', //visualizar containers
  },
  topContainerWelcome: {
    height: 100,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 32,
    //   backgroundColor: 'yellow', //visualizar containers
  },
  appTittleContainer: {
    padding: 0,
    paddingTop: 20,
    height: 100,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
   //   backgroundColor: 'yellow', //visualizar containers
  },
  logoImage: {
    alignItems: "center",
    //   backgroundColor: 'purple', //visualizar containers
  },
  button: {
    width: 200,
    height: 50,
    alignSelf: "center",
    marginBottom: 40,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 5,
  },
  messageText: {
    fontSize: 22,
    color: "#000",
    opacity: 0.5,
    lineHeight: 22,
    marginVertical: 8,
    marginHorizontal: 8,
    textAlign: "center",
  },
  squareImage: {
    height: "100%",
    width: "100%",
  },
  flagIcon: {
    width: 22,
    height: 22,
  },
  languageText: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
    fontWeight: "bold",
    marginTop: 20,
    lineHeight: 30,
  },
  appNameText: {
    fontSize: 22,
    marginTop: 12,
    fontFamily: 'Roboto_400Regular',
  },
  introText: {
    fontSize: 24,
    color: "#000",
    opacity: 0.6,
    lineHeight: 24,
    marginHorizontal: 5,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});
