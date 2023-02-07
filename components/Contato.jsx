import React, {useRef} from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

import  emailjs  from '@emailjs/browser'

const Contato = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_lwzlwkn', 'template_71i4pzr', form.current, 'eZ1YNXRB7FcY0d-k_')
      .then((result) => {
          console.log(result.text);
          console.log('deu certo')
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div id='contato' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
            <p className='uppercase text-xl tracking-widest text-sky-700'>Contato</p>
            <h2 className='py-4'>Vamos conversar</h2>

            <div className='grid lg:grid-cols-5 gap-8'>
                {/*Esquerdo */}
                <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-300 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div>
                            <h2 className='py-3'>Samuel Tedeschi</h2>
                            <p>Desenvolvedor Front-end</p>
                            <p className='py-6 uppercase text-sm tracking-winter text-gray-900'>Vamos nos conectar e fazer network, me siga nas redes sociais ou me mande um email.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8 mt-10 text-center '>Me Siga</p>
                            <div className='flex items-center justify-between py-6 mx-12'>

                            <a
                            href='https://www.linkedin.com/in/samuel-tedeschi/'
                            target='_blank'
                            rel='noreferrer'
                            >
                                <div className='rounded-full shadow-lg shadow-gray-600 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn size={30} className='text-sky-700'/>
                                </div>
                            </a>

                            
                            <a
                            href='https://github.com/samuelTedeschi'
                            target='_blank'
                            rel='noreferrer'
                            >
                                <div className='rounded-full shadow-lg shadow-gray-600 p-7 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaGithub size={30} className='text-black'/>
                                </div>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Direito */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-300 rounded-xl lg:p-4'>
                    <div className='py-4'>
                        
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Nome</label>
                                    <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300 ' name='from_name'/>
                                </div>
                            
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Telefone</label>
                                    <input type='tel' className='border-2 rounded-lg p-3 flex border-gray-300 ' name='user_tel' />
                                </div>
                            </div>

                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input type="email" className='border-2 rounded-lg p-3 flex border-gray-300 ' name='user_email' />
                            </div>

                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Assunto</label>
                                <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300 ' name='user_asunto' />
                            </div>

                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Mensagem</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
                            </div>

                            <button className='w-full p-4 text-gray-900 mt-4' >Enviar Mensagen</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex justify-center py-12'>
                <Link href=''>
                    <div className='rounded-full shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-sky-600' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contato