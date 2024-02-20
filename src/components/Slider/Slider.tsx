import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, SafeAreaView, Text, View } from 'react-native'
import Horizontal from './Horizontal/Horizontal';
import { FlatList } from 'react-native';
import Data, { IData } from './Data/Data';
import styles from './Style/Style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface IList{
    item:IData,
    index:number
}

const Slider = () => {

    // function InfiniteScroll(){
    //     console.log("Infinite Scroll called::")
    //     for(let i=0;i<Data.length;i++)
    //      {
    //         Data.push(Data[i]);
    //      }
    // }
 
  const FLatListRef=useRef(null);
     const [ScrollIndex,setScrollIndex]=useState<number>();
    function renderItem({item,index}:IList){
        
        return(
            <Horizontal  image={item.image} index={index}  ScrollValue={ScrollIndex}/>
        )
    }
 
  return (
    <View style={{height:windowHeight/3,}} >
        <FlatList 
        pagingEnabled={true}
        ref={FLatListRef}
        data={Data} 
        renderItem={renderItem}
        horizontal={true}
        onScroll={(e)=>{
          const X=e.nativeEvent.contentOffset.x;
          const SrcollIdx=parseInt((X/Dimensions.get('window').width).toFixed(0));
          setScrollIndex(SrcollIdx);
          
        }}
        showsHorizontalScrollIndicator={false}
        // onEndReachedThreshold={0.5}
        // onEndReached={InfiniteScroll}
        />

    </View>
  )
}

export default Slider