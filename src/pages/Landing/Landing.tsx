import { Lock, User } from 'phosphor-react'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Main } from './LandingStyle'

const Landing = () => {
  const logo = "https://labortronica.com.br/wp-content/uploads/2018/06/logot.png"
  return (
    <Main>
      <div className='rounded p-4 align-middle justify-center flex flex-col bg-cyan-300 w-[50%] h-[75%]'>
      <img src={logo} alt="" className='w-48 self-center'/>
      <p className='self-center text-neutral-100'>Sistema de Armazenamento Personalizado</p>
      <div className='my-2 w-48 self-center'>
      <User className='translate-y-5 ml-1'/><input className='focus:outline-none rounded pl-5' placeholder='Usuário'></input>
      <Lock className='translate-y-5 ml-1'/><input className='focus:outline-none rounded pl-5' placeholder='Senha'></input>
      </div>
      <button className='' type='submit'>Login</button>
      </div>
    </Main>
  )
}

export default Landing
