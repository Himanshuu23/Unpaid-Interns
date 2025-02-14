import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
enableScreens(); // Enable optimized screen rendering

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "@/navigation/MainStackNavigator"; 

export default function App() {
    return (
       
            <MainStackNavigator />
        
    );
}
