import React from 'react'
import { Article } from './FileCardStyle'

interface FileCardProps{
  name:string;
  date:Date;

}

const FileCard = () => {
  return (
    <Article className='bg-neutral-300'>
      <p></p>
    </Article>
  )
}

export default FileCard
