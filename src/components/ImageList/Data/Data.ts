import React from "react";
import Glyphs from "../../../assests/Glyph";

export interface IData{
   name:string,
   image:any
}


const Data=[
    {
        name:"Sunny",
        image:Glyphs.Sun

    },
    { name:'Winter',
    image:Glyphs.Winter

    },
    {
        name:'Rainy',
        image:Glyphs.Rain

    },
    {   
        name:'Autumn',
        image:Glyphs.Autumn

    }

];


export default Data;