import React from 'react'
import Image from 'next/image'
import tempoImg from 'public/assets/projetos/tempo.png'
import cryptoImg from 'public/assets/projetos/crypto.jpg'
import netflixImg from 'public/assets/projetos/netflix.jpg'
import twitchImg from 'public/assets/projetos/twitch.jpg'
import ProjetoItems from './ProjetoItems'
import Link from 'next/link'

const Projetos = () => {
  return (
    <div id='projetos' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#FFAC47]'>Projetos</p>
            <h2 className='py-4 text-[#FBF6EF]'>Projetos que eu construi</h2>

            <div className='grid md:grid-cols-2 gap-8 '>

                <ProjetoItems 
                    title='Weather-app' 
                    backgroundImg={tempoImg} 
                    projetoUrl='/weather'
                />
            {/* 
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

            */}
            </div>
        </div>
    </div>
  )
}

export default Projetos