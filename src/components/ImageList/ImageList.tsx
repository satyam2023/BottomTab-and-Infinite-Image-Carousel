import React from "react";
import { FlatList, View } from "react-native";
import Data ,{IData} from "./Data/Data";
import Season from "./Season/Season";


const ImageList=()=>{

    interface IimageList{
        item:IData,
        index:number
    
    }

    function RenderItem({item,index}:IimageList){
        return(
       <Season image={item.image} name={item.name}/>
        );
    }
    return(
     
        <FlatList  
        data={Data}
        renderItem={RenderItem}
        numColumns={2}
        style={{alignSelf:'center'}}
        />
        
    )
};
export default ImageList;