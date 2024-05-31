import React, { useEffect, useState } from 'react';
import PricingPage from "./Components/Price/PricingPage"
import ThemeBtn from './Components/ThemeBtn';
import {ThemeProvider} from './ThemeToggler';

const App = () => {
  const [theme, setTheme] =useState("light");
  const lightTheme=()=>{
    setTheme("light")
  }
  const darkTheme=()=>{
    setTheme("dark");
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(theme);
  },[theme]);
  return (
    <ThemeProvider value={{theme,lightTheme,darkTheme}} className="App">
    <div className='flex flex-col bg-blue-50 overflow-hidden'>
    <div className=''>
     <ThemeBtn/>
     </div>
       <div>
       <PricingPage />
       </div>
    </div>
   

    </ThemeProvider>
  );
};

export default App;
