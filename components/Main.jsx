import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div>
                <p className='uppercase text-sm tracking-winter text-gray-600'>Vamos construir algo inovador juntos</p>

                <h1 className='py-4 text-gray-900'>
                    Olá, me chamo
                    <span className='text-sky-600'> Samuel </span>
                </h1>
                <h1 className='py-2 text-gray-900'>
                    Desenvolvedor Front-End
                </h1>
                <p className='py-4 text-gray-500 max-w-[70%] m-auto'>
                Estou disposto a novas aventuras e desafios que possam me ajudar a crescer e me desenvolver como profissional.
                Possuo conhecimento tanto em HTML, CSS, JavaScript quanto em bibliotecas e frameworks usadas para desenvolver webpages,
                como Tailwind CSS e React, entre outros. Estou sempre pronto para aproveitar oportunidades que possam me ensinar novas habilidades
                e me ajudem a construir um portfólio ainda mais impressionante.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
                    <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn size={20} className='text-sky-700'/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub size={20} className='text-black'/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20} className='text-red-500'/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill size={20} className='text-gray-700'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main