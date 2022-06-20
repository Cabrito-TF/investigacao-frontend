import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { FileUploader } from "react-drag-drop-files";
import { Upload } from '../assets/styles/PageStyle';
import axios from 'axios';

const fileTypes = ["PDF"];


const FileUpload = () => {
  const [file, setFile] = useState<Blob>(new Blob);
  const [client, setClient] = useState('')
  const [tags, setTags]= useState('')
  const handleFile = (file:any) => {
    console.log(file)
    setFile(file);
  };
  async function submitFile(){
    let form = new FormData();
    form.append("pdf",file);
    form.append("client",client);
    form.append("tags",tags);
    axios.post(`http://localhost:3333/files/upload`, form,
    {headers: {
      "Content-Type": "multipart/form-data",
    }})
    .then(()=>console.log('sucesso...'))
    .catch(err => console.log(err))
  }
  return (
    <>
    <Sidebar page="upload"/>
    <Upload>
      <div className='w-50 h-50 flex flex-col items-start mx-10'>
        <p className='text-white uppercase font-mono font-black items-center justify-center'> Insira seu arquivo </p>
        <FileUploader className=''handleChange={handleFile} name="file" types={fileTypes} />

        <div className='mt-10'>
        <p className='text-white uppercase font-mono font-black items-center justify-center'> Insira as tags com espaços </p>
        <input className='w-50'
        value={tags}
        onChange={(e)=>{
          setTags(e.target.value);
        }} placeholder='Insira as tags'/>
        </div>

        <div className='mt-10'>
        <p className='text-white uppercase font-mono font-black items-center justify-center'> Insira o cliente referente ao laudo </p>
        <input className='w-50'
        value={client}
        onChange={(e)=>{
          setClient(e.target.value);
        }}
        placeholder='Insira a razão social do cliente'/>
        </div>

        <button className='w-30 h-10 rounded mt-20 bg-cyan-300 ' onClick={submitFile}>Enviar Arquivo</button>

      </div>
    </Upload>

    </>
  )
}

export default FileUpload
