import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import ProductDetails from "../../components/Product/Product";
import styles from "./Style/Style";
import Data from "./Data/Data";
import { IData } from "./Data/Data";
import Uppertab from "../../components/Tab/Tab";
interface IFlatlistData{
    item:IData
}

const Product=()=>{
   

    function RenderItem({item}:IFlatlistData){
        
    return(
        <ProductDetails ProductId={item.ProductId} ProductName={item.ProductName} Price={item.Price} />
    )
    }


    return(
      
        <View style={styles.container}>
             <Uppertab name="Product"/>
        <FlatList
        data={Data}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false} />
        </View>
    );
};
export default Product;