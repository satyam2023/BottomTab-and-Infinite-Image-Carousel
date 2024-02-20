import React from "react";
import { Text, View } from "react-native";
import styles from "./Style/Style";
interface Itab{
    name:string
}
const Uppertab=({name}:Itab)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>{name}</Text>
        </View>
    );
};
export default Uppertab;