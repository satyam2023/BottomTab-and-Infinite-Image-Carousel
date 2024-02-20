import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text } from "react-native";
import Home from "../views/Home/Home";
import Product from "../views/Product/Product";
import Profile from "../views/Profile/Profile";
import Glyphs from "../assests/Glyph";

const Tab = createBottomTabNavigator();


const Route =()=>{
    const [routeDetails,setRouteDetails]=useState<string>();
    return(
       <NavigationContainer>
        <Tab.Navigator
         screenOptions={
            ({route})=>({
                headerShown:false,
                headerTitleStyle: { fontWeight: 'bold' },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'black',   
            })  
        }>

      <Tab.Screen name="Home" component={Home} 
      options={{
        
        tabBarLabel: 'Home',
        title: 'Home',
        tabBarIcon: ({ }) => {
            return (<Image source={Glyphs.Home}/>);
        }
    }
}  
      />

      <Tab.Screen name="Product" component={Product} 
      options={{
        title: 'Products',
        tabBarIcon: ({ }) => {
            return (<Image 
                style={{ }}
                source={Glyphs.Product}/>);}
  
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
       options={{
        title: 'Profile',
        tabBarIcon: ({ }) => {
            return (<Image 
                style={{ }}
                source={Glyphs.Profile}/>);}
  
      }}
      />
    </Tab.Navigator>


       </NavigationContainer>
    );
};
export default Route;