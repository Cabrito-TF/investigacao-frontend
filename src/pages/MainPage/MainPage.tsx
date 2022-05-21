import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Main } from '../../assets/styles/PageStyle';
import { MagnifyingGlass } from 'phosphor-react';

const MainPage = () => {
  return (
    <Main>
      <Sidebar page='laudos'/>
      <div className='relative left-6 top-6 w-full h-full'>
      <MagnifyingGlass color='#a1a1a1' className='translate-y-5 left-1 relative'/>
      <input className='rounded-md w-[50rem] bg-zinc-800 px-6'/>
      </div>
    </Main>
  )
}

export default MainPage
