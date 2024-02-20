import React from "react";
import styles from "./Style/Style";
import { Image, Text, View } from "react-native";
import Glyphs from "../../assests/Glyph";
interface IUser{
    name:string,
    age:string,
    mobile:string
}

const User=({name,age,mobile}:IUser)=>{
    return(
        <View style={styles.container}>
            <Image source={Glyphs.Profile}  style={styles.img}/>
            <View style={styles.details}>
                <Text style={styles.txt}>
                    Name: {name}
                </Text>
                <Text style={styles.txt}>
                    Age: {age}
                </Text>
                <Text style={styles.txt}>
                    Phone No.: {mobile}
                </Text>
            </View>
            
        </View>
    );
};
export default User;