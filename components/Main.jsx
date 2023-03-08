import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Main = () => {

    const [text, count] = useTypewriter({
        words:[
            "Vamos construir algo inovador juntos",
            "Explore meus porjetos",
            "<Apaixonado por codigos/>"
          ],
    
          loop:true,
    
          delaySpeed:2000,
    })

  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div>
                <p className='uppercase text-sm tracking-winter text-[#B8BEBF]'>
                    {text}
                    <Cursor cursorColor="yellow"/>
                </p>

                <h1 className='py-4 text-[#FBF6EF]'>
                    Olá! Me chamo
                    <span className='text-[#E3943B]'> Samuel </span>
                </h1>
                <h1 className='py-2 text-[#FBF6EF]'>
                    Desenvolvedor Front-End
                </h1>
                <p className='py-4 text-[#FBF6EF] max-w-[70%] m-auto'>
                Estou disposto a novas aventuras e desafios que possam me ajudar a crescer e me desenvolver como profissional.
                Possuo conhecimento tanto em HTML, CSS, JavaScript quanto em bibliotecas e frameworks usadas para desenvolver webpages,
                como Tailwind CSS e React, entre outros. Estou sempre pronto para aproveitar oportunidades que possam me ensinar novas habilidades
                e me ajudem a construir um portfólio ainda mais impressionante.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>

                    <a
                        href='https://www.linkedin.com/in/samuel-tedeschi/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='rounded-full shadow-lg bg-[#4C4C43] shadow-[#0B0B09] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn size={20} className='text-sky-700'/>
                        </div>
                    </a>

                    <a
                        href='https://github.com/samuelTedeschi'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='rounded-full shadow-lg  bg-[#4C4C43] shadow-[#0B0B09] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub size={20} className='text-black'/>
                        </div>
                    </a>

                    <Link href='/#contato'>
                        <div className='rounded-full shadow-lg  bg-[#4C4C43] shadow-[#0B0B09] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={20} className='text-red-500'/>
                        </div>
                    </Link>

                    <Link href='/#sobre'>
                        <div className='rounded-full shadow-lg  bg-[#4C4C43] shadow-[#0B0B09] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill size={20} className='text-gray-900'/>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main