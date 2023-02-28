import React from 'react'
import Image from 'next/image'
import html from 'public/assets/skills/html.png'
import css from 'public/assets/skills/css.png'
import Javascript from 'public/assets/skills/javascript.png'
import nextjs from 'public/assets/skills/nextjs.png'
import react from 'public/assets/skills/react.png'
import tailwind from 'public/assets/skills/tailwind.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>

        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>

            <p className='text-xl tracking-widest uppercase text-[#078C4E]'>Skils</p>
            <h2 className='py-4 text-[#0D734D] '>Tecnologias que eu mais utilizo</h2>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={css} alt=""
                                  width='62px'
                                  height='62px'  
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-[#D9D9D9]'>CSS</h3>
                            </div>
                     </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} alt=""
                                  width='62px'
                                  height='62px'  
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-[#D9D9D9]'>HTML</h3>
                            </div>
                     </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Javascript} alt=""
                                  width='62px'
                                  height='62px'  
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-[#D9D9D9]'>Javascript</h3>
                            </div>
                     </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} alt=""
                                  width='62px'
                                  height='62px'  
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-[#D9D9D9]'>React.js</h3>
                            </div>
                     </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} alt=""
                                  width='62px'
                                  height='62px'  
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-[#D9D9D9]'>Next.js</h3>
                            </div>
                     </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} alt=""
                                  width='62px'
                                  height='62px'  
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='text-[#D9D9D9]'>Tailwind CSS</h3>
                            </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills