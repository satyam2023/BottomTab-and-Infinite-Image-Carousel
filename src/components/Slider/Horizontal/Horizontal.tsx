import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, Text, View } from 'react-native'
import styles from '../Style/Style';
import { Dimensions } from 'react-native';
import Data from '../Data/Data';
interface IHorizontal {
    image: any,
    index: number,
    ScrollValue: any,
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Horizontal: React.FC<IHorizontal> = ({ image, index, ScrollValue, }: IHorizontal) => {
   
    const animScale = useRef(new Animated.Value(1)).current;
    useEffect(
        () => {
            if (index == ScrollValue) {
              if(!Data[ScrollValue+Data.length]){
                Data.push(Data[ScrollValue%Data.length]);
                
             }

                Animated.timing(animScale, {
                    toValue: 2,
                    duration: 1000,
                    useNativeDriver: true
                }).start()
            }
            else if (index != ScrollValue) {
                Animated.timing(animScale, {
                    toValue: 1,
                    duration: 10,
                    useNativeDriver: true
                }).start()
            };

            
        }
        , [ScrollValue]);

    const animatedStyle = {
        transform: [{
            scale: animScale
        }],

    }

    return (
        <View style={{ height: windowHeight }}>
            <View style={{ width: windowWidth,paddingHorizontal:30 }}>
                <View style={[{ padding: 60, backgroundColor: '#E6E6E6', borderRadius: 40 }]}>
                    <Animated.Image source={image} style={[{ alignSelf: 'center', height: 100, width: 100 }, animatedStyle]} />
                </View>
            </View>
        </View>
    )
}

export default Horizontal;