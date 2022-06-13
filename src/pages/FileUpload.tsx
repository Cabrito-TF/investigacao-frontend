import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { FileUploader } from "react-drag-drop-files";
import { Upload } from '../assets/styles/PageStyle';
import axios from 'axios';

const fileTypes = ["JPG", "PNG", "GIF","PDF"];


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file:any) => {
    setFile(file);
  };
  const submitFile = ()=>{
    console.log(file);
    const fileBlob = new BlobBuilder(file,{type: 'application/pdf'})
    axios.post("http://localhost:3333/files/upload", fileblob)
  }
  return (
    <>
    <Sidebar page="upload"/>
    <Upload>
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    <button className='w-48 h-20 rounded mt-20 bg-cyan-300 ' onClick={submitFile}></button>
    </Upload>

    </>
  )
}

export default FileUpload
