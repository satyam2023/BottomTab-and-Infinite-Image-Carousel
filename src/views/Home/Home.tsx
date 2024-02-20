import React from "react";
import { Text, View } from "react-native";
import styles from "./Style/Style";
import Uppertab from "../../components/Tab/Tab";
import Slider from "../../components/Slider/Slider";
import ImageList from "../../components/ImageList/ImageList";


const Home=()=>{
    return(
        <View style={styles.container}>
            <Uppertab name={"Home"}/>
            {/* <Text style={{alignSelf:'center',fontSize:20,fontWeight:'600'}}>
                Home Screen
            </Text> */}
            <Slider/>
            <ImageList/>
        </View>
    );
};
export default Home;