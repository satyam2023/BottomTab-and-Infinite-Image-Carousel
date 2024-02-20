import React from "react";
import { Image } from "react-native";
import Glyphs from "../../assests/Glyph";

const SplashScreen=()=>{
    return(

        <Image source={Glyphs.Ios} style={{alignSelf:'center',marginTop:'60%'}}/>
    )
};

export default SplashScreen;