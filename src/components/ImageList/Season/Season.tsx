import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Style/Style";
interface ISeason{
    image:any,
    name:string
}
const Season=({image,name}:ISeason)=>{
    return(
        <View style={styles.container}>
            <Image source={image}/>
            <Text style={styles.txt}>
                {name}
            </Text>

        </View>
    )
};

export default Season