import { SignOut } from 'phosphor-react'
import React from 'react'
import { Menu } from './SidebarStyle'

const Sidebar = () => {
  return (
    <Menu>
    <a href="/"><img className='py-10' src="https://labortronica.com.br/wp-content/uploads/2018/06/logot.png" alt="Labortrônica" /></a>
    <ul className=''>
      <li className='rounded uppercase text-neutral-300 font-["Roboto"] px-2 py-1 my-1 hover:bg-zinc-700 focus:outline-none'><a href="/" >Laudos</a></li>
      <li className='rounded uppercase text-neutral-300 font-["Roboto"] px-2 py-1 my-1 hover:bg-zinc-700 focus:outline-none'><a href="/" >Recentes</a></li>
      <li className='rounded uppercase text-neutral-300 font-["Roboto"] px-2 py-1 my-1 hover:bg-zinc-700 focus:outline-none'><a href="/" >Upload</a></li>
    </ul>
    <ul>
      <li className='rounded uppercase flex text-justify translate-x-2 absolute bottom-5 text-cyan-300'><SignOut className='translate-y-1'/><a href="">Logout</a></li>
    </ul>
    </Menu>
  )
}

export default Sidebar
