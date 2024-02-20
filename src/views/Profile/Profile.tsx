import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./Style/Style";
import Data from "./Data/Data";
import { IData } from "./Data/Data";
import User from "../../components/UserDetails/User";
import Uppertab from "../../components/Tab/Tab";


interface IFlatlistData {
    item: IData;
    index: number
}


const Profile = () => {

    function RenderItem({ item }: IFlatlistData) {
        return (
            <User name={item.name} age={item.age} mobile={item.mobilenumber} />
        );
    }
    return (
        <View style={styles.container}>
             <Uppertab name="Profile"/>
            <FlatList
                data={Data}
                renderItem={RenderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};
export default Profile;