import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SwapOnboarding from '../../components/swapOnboarding'
import { Container, Text, ContainerButtons } from './styles';
import IndexCurrentScreen from './indexCurrentScreen'

const Tab = createMaterialTopTabNavigator();

const OnboardingOne = () => { return <SwapOnboarding title={"one"} /> }
const OnboardingTwo = () => { return <SwapOnboarding title={"two"} /> }
const OnboardingThree = () => { return <SwapOnboarding title={"three"} /> }

const onboarding = ({ navigation }) => {
    const [textButton, setTextButton] = useState("Próximo");

    const getScreen = () => {
        console.log("swith: " + IndexCurrentScreen.currentScreen);
        switch (IndexCurrentScreen.currentScreen) {
            case 1:
                return "onboardingOne";
            case 2:
                return "onboardingTwo";
            case 3:
                return "onboardingThree";
        }
    }

    const previous = () => {
        if (IndexCurrentScreen.currentScreen > 1) {
            IndexCurrentScreen.removeIndex();
            navigation.navigate(getScreen());
        }

        if (IndexCurrentScreen.currentScreen == 2)
            setTextButton("Próximo");

    }

    const next = () => {
        if (IndexCurrentScreen.currentScreen < 3) {
            IndexCurrentScreen.addIndex();
            navigation.navigate(getScreen());
        }

        if (IndexCurrentScreen.currentScreen == 3)
            setTextButton("Concluir");
    }

    const goToHome = () => {
        navigation.navigate("home");
    }

    return (
        <Container>
            <Tab.Navigator tabBarOptions={{ style: { display: "none" } }} sceneContainerStyle={{ backgroundColor: 'transparent', padding: 20 }}>
                <Tab.Screen name="onboardingOne" component={OnboardingOne} />
                <Tab.Screen name="onboardingTwo" component={OnboardingTwo} />
                <Tab.Screen name="onboardingThree" component={OnboardingThree} />
            </Tab.Navigator>

            <ContainerButtons>
                <TouchableOpacity isFirstScreen={IndexCurrentScreen.currentScreen == 1} onPress={() => previous()}><Text>Anterior</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => IndexCurrentScreen.currentScreen == 3 ? goToHome() : next()}><Text>{textButton}</Text></TouchableOpacity>
            </ContainerButtons>
        </Container>
    );
}

export default onboarding;