import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import { useRouter } from 'next/router'


const Navbar = () => {
    
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter()

    useEffect(()=>{
        if (
            router.asPath ==='/property'
            
        ) {
            setNavBg ('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg ('#ecf0f3')
            setLinkColor('#1f2937')
        }
    },[router])

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow)
    },[])
    
    return (
        <div 
        style={{backgroundColor: `${navBg}`}}
        className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
                <Image 
                    src="/../public/assets/logo/Samuel-Tedeschi.png" alt="" 
                    width='80' 
                    height='40'
                />

                <div>
                    <ul 
                    style={{color:`${linkColor}`}}
                    className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#sobre'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Sobre</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skill</li>
                        </Link>
                        <Link href='/#projetos'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projeto</li>
                        </Link>
                        <Link href='/#contato'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contato</li>
                        </Link>
                    </ul>

                    <div className='md:hidden' onClick={handleNav} >
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/80' : ''}>
                <div 
                    className={
                    nav 
                        ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' 
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src="/../public/assets/logo/skills-logo.png" alt=""  width='40' height='10'/>

                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer' >
                                <AiOutlineClose/>
                            </div>
                        </div>

                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Vamos construir algo inovador juntos</p>
                        </div>
                    </div>
                    
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav (false)} className='py-4 text-sm '>Home</li>
                            </Link>
                            <Link href='/#sobre'>
                                <li onClick={() => setNav (false)} className='py-4 text-sm '>Sobre</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav (false)} className='py-4 text-sm '>Skill</li>
                            </Link>
                            <Link href='/#projetos'>
                                <li onClick={() => setNav (false)} className='py-4 text-sm '>Projetos</li>
                            </Link>
                            <Link href='/#contato'>
                                <li onClick={() => setNav (false)} className='py-4 text-sm '>Contato</li>
                            </Link>
                        </ul>

                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-sky-600'>Vamos nos conectar</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hove:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hove:scale-105 ease-in duration-300'>
                                    <FaGithub/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hove:scale-105 ease-in duration-300'>
                                    <AiOutlineMail/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hove:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar