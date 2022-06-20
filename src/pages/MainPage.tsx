import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import { Main } from '../assets/styles/PageStyle';
import { MagnifyingGlass } from 'phosphor-react';
import axios,{AxiosResponse} from 'axios';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

interface File{
  _id: string,
	client: string,
	name: string,
  size: number,
  key: string,
  url: string,
  tags: [],
  createdAt: string,
}
const MainPage = () => {
  let file:File[];
  file = [];
  const history = useNavigate();

  const [loading, setLoading] = useState(false)
  const [fileArray, setFileArray] = useState(file);
  useEffect(()=>{
    async function loadFiles(){
      await api.get(`files/list`)
      .then((response:AxiosResponse)=>{
        const file:File[] = response.data;
        setFileArray(file);
      })
      .catch(err => console.log(err))
    }
    loadFiles();
  }, [history])
  return (
    <Main>
      <Sidebar page='laudos'/>
      <div className='relative left-6 top-6 w-full h-full'>
      <MagnifyingGlass color='#a1a1a1' className='translate-y-5 left-1 relative'/>
      <input className='rounded-md w-[50rem] bg-zinc-800 px-6'/>
      <div className='flex flex-col'>
        {fileArray.map((file, index) => <a href={file.url} key={index} target='_blank' rel='noreferrer' className='text-white'>{file.key.slice(33 ,-4)}</a>)}
      </div>
      </div>
    </Main>
  )
}

export default MainPage;
