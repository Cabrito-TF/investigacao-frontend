import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Main } from '../../assets/styles/PageStyle';
import { MagnifyingGlass } from 'phosphor-react';
import files from '../../assets/pdfs/index.json'
import pdf from '../../assets/pdfs/dummy.pdf';

const MainPage = () => {

  return (
    <Main>
      <Sidebar page='laudos'/>
      <div className='relative left-6 top-6 w-full h-full'>
      <MagnifyingGlass color='#a1a1a1' className='translate-y-5 left-1 relative'/>
      <input className='rounded-md w-[50rem] bg-zinc-800 px-6'/>
      <div className='flex flex-col'>
        {files.files.map((file, index) => <a href={`src/assets/pdfs/${file}`} key={index} target='_blank' rel='noreferrer' className='text-white'>{file.slice(0,-4)}</a>)}
      </div>
      </div>
    </Main>
  )
}

export default MainPage
