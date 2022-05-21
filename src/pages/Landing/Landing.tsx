import { Lock, User } from 'phosphor-react'
import React from 'react'
import { useHref, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Main } from '../../assets/styles/PageStyle'

const Landing = () => {
  const logo = "https://labortronica.com.br/wp-content/uploads/2018/06/logot.png";
  const navigate = useNavigate();
  function handleLogin(){
    navigate('main');
  }

  return (
    <Main>
      <div className='rounded p-4 align-middle justify-center items-center flex flex-col bg-cyan-300 w-[50%] h-[75%]'>
      <img src={logo} alt="" className='w-48 self-center'/>
      <p className='self-center text-neutral-100'>Sistema de Armazenamento Personalizado</p>
      <div className='my-2 w-48 self-center'>
      <User className='translate-y-5 ml-1'/><input className='focus:outline-none rounded pl-5' placeholder='Usuário'></input>
      <Lock className='translate-y-5 ml-1'/><input className='focus:outline-none rounded pl-5' placeholder='Senha'></input>
      </div>
      <div className='w-28 self-center ml-2'>
      <button className='rounded bg-blue-300 w-full py-1 focus:outline-none ' onClick={handleLogin}>Login</button>
      </div>
      </div>
    </Main>
  )
}

export default Landing
