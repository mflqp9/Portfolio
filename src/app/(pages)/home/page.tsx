import HeroSection from '@/components/hero/HeroSection';
import React from 'react';
import { choosenTheme } from '@/components/util/theme' ;
import Skills from '@/components/skills/Skills';

export const metadata={
title:"My Portfolio ",
description:"Portfolio Muhammad Faisal"
}

const HomePage = () => {

  
  return (
    <div>
      <HeroSection theme={choosenTheme}/>
      <Skills theme={choosenTheme}/>
    </div>
  )
}

export default HomePage
