/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import Route from './src/routes/Routes';
import SplashScreen from './src/components/Splash/Splash';
import ImageList from './src/components/ImageList/ImageList';
function App(): React.JSX.Element {
  const [splash,setSplash]=useState<boolean>(true);
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false);
    },2000)
  },[])
 
  return (
    <>
    {splash?
    <SplashScreen/>:
    <Route/> 
    }
    </>
  );
}



export default App;
