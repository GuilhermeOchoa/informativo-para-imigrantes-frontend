import { Icon, useTheme } from 'native-base';
import { Platform } from 'react-native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ArticleDTO } from '@dtos/ArticleDTO';

import { Contact } from '@screens/Contact';
import { Articles } from '@screens/Articles';
import { ArticlesDetals } from '@screens/ArticlesDetails';
import { RegisterProgramForm1 } from '@screens/forms/RegisterProgram/RegisterProgramForm1';

import { Entypo } from '@expo/vector-icons'
import { Feed } from '@screens/Feed';
import RegisterProgram from '@screens/forms/RegisterProgram';

type AppRoutes = {
    article: undefined;
    articleDetails: ArticleDTO;
    contact: undefined;
    feed: undefined;
    onboarding: undefined;
    registerProgramFormPage: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const { sizes, colors } = useTheme();

    const iconsSize = sizes[2];

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
                backgroundColor: colors.white,
                borderTopWidth: 1,
                borderTopColor: colors.green[700],
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: sizes[8],
                paddingTop: sizes[6],
            }
        }}>
        <Screen
            name='registerProgramFormPage'
            component={RegisterProgram}
            options={{
                tabBarIcon: () => (
                    <Icon
                        as={Entypo}
                        name="home"
                        color={colors.green[700]}
                        size={iconsSize}
                    />
                )
            }}
        />
     {/*        <Screen
                name='article'
                component={Articles}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            as={Entypo}
                            name="text-document-inverted"
                            color={colors.green[700]}
                            size={iconsSize}
                        />
                    )
                }}
            />

            <Screen
                name='feed'
                component={Feed}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            as={Entypo}
                            name="home"
                            color={colors.green[700]}
                            size={iconsSize}
                        />
                    )
                }}
            />

            <Screen
                name='articleDetails'
                component={ArticlesDetals}
                options={{
                    tabBarButton: () => null
                }}

            />

            <Screen
                name='contact'
                component={Contact}
                options={{
                    tabBarIcon: () => (
                        <Icon
                            as={Entypo}
                            name="help-with-circle"
                            color={colors.green[700]}
                            size={iconsSize}
                            accessibilityViewIsModal={false}
                        />
                    )
                }}
            /> */}
        </Navigator>
    )
}