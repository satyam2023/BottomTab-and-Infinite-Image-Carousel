import React from "react";
import { Text, View } from "react-native";
import styles from "./Style/Stye";
interface IProduct{
    ProductId:string,
    ProductName:string,
    Price:string
}

const ProductDetails=({ProductId,ProductName,Price}:IProduct)=>{
    return(
        <View style={styles.container}>
             <Text style={styles.txt}>Product Id: {ProductId}</Text>
             <Text style={styles.txt}>Product Name : {ProductName}</Text>
            <Text style={styles.txt}>Product Price : {Price}</Text>
            
        </View>

    );
}
export default ProductDetails;