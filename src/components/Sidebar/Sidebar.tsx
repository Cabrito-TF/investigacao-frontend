import { SignOut } from 'phosphor-react'
import React from 'react'
import { Menu } from './SidebarStyle'

interface SidebarProps{
  page:string;
}

const Sidebar = ({page}:SidebarProps) => {
  return (
    <Menu>
    <a href="/"><img className='py-10' src="https://labortronica.com.br/wp-content/uploads/2018/06/logot.png" alt="Labortrônica" /></a>
    <div className='flex flex-col'>
      <a href="/main"    className={`rounded uppercase text-neutral-300 font-sans px-0 py-1 my-1 text-center ${page == 'laudos' ? "bg-zinc-700": null} hover:bg-zinc-700 focus:outline-none `}>Laudos</a>
      <a href="/recent"  className={`rounded uppercase text-neutral-300 font-sans px-0 py-1 my-1 text-center ${page == 'recent' ? "bg-zinc-700": null} hover:bg-zinc-700 focus:outline-none `}>Recentes</a>
      <a href="/uploads" className={`rounded uppercase text-neutral-300 font-sans px-0 py-1 my-1 text-center ${page == 'upload' ? "bg-zinc-700": null} hover:bg-zinc-700 focus:outline-none `}>Upload</a>
    </div>
    <ul>
      <li className='rounded uppercase flex text-justify translate-x-2 absolute bottom-5 text-cyan-300'><SignOut className='translate-y-1'/><a href="">Logout</a></li>
    </ul>
    </Menu>
  )
}

export default Sidebar
