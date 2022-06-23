import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import OneSignal from 'react-onesignal';
// import ComponentTriggered from './components/Language';
// import ComponentRender from './components/Language/new';

 
export default function App () {
const [initialized, setInitialized] = useState(false)
useEffect(() => {
  OneSignal.init({
    appId: ""
  })
  .then(() => setInitialized(true));
  OneSignal.showSlidedownPrompt().then(() => {

  })
}, [])
 return(
   <>
    <HomePage />
   </>
     
   )
 
  
}

