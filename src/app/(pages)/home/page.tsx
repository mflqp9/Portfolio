"use client"
import HeroSection from '@/components/hero/HeroSection';
import React from 'react';
import { choosenTheme } from '@/components/util/theme' ;
import Skills from '@/components/skills/Skills';


const HomePage = () => {

  
  return (
    <div>
      <HeroSection theme={choosenTheme}/>
      <Skills theme={choosenTheme}/>
    </div>
  )
}

export default HomePage
