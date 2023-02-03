import React from 'react'
import Image from 'next/image'
import propertyImg from 'public/assets/projetos/property.jpg'
import cryptoImg from 'public/assets/projetos/crypto.jpg'
import netflixImg from 'public/assets/projetos/netflix.jpg'
import twitchImg from 'public/assets/projetos/twitch.jpg'
import ProjetoItems from './ProjetoItems'
import Link from 'next/link'

const Projetos = () => {
  return (
    <div id='projetos' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-sky-700'>Projetos</p>
            <h2 className='py-4'>Projetos que eu construi <span className='text-red-600 text-lg'> Obs: Esses projetos sao representativo, vou colocar os meus projetos em breve</span> </h2>

            <div className='grid md:grid-cols-2 gap-8 '>

                <ProjetoItems 
                    title='Property fiends' 
                    backgroundImg={propertyImg} 
                    projetoUrl='/property'
                />

                <ProjetoItems 
                    title='Property fiends' 
                    backgroundImg={cryptoImg} 
                    projetoUrl='/crypto'
                />
                
                <ProjetoItems 
                    title='Property fiends' 
                    backgroundImg={netflixImg} 
                    projetoUrl='/netflix'
                />
                <ProjetoItems 
                    title='Property fiends' 
                    backgroundImg={twitchImg} 
                    projetoUrl='/twitch'
                />
            </div>
        </div>
    </div>
  )
}

export default Projetos