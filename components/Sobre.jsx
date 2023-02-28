import React from 'react'
import Image from 'next/image'
import fotoPerfil from 'public/fotoPerfil.png'
import Link from 'next/link'

const Sobre = () => {
  return (
        <div id='sobre' className='w-full md:h-screen p-2 flex items-center py-16 '>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#078C4E] '>Sobre</p>

                    <h2 className='py-4 text-[#0D734D]'>Quem é o Samuel? </h2>

                    <p className='py-2 text-gray-300'>
                    Samuel Tedeschi é um desenvolvedor front-end experiente e apaixonado por codificação. Ele possui um certificado CS50X da HarvardX e programa há mais de um ano. Seu conjunto de habilidades inclui estruturas HTML, CSS, Javascript, Next.js, Typescript e CSS.
                    </p>
                    <p className='py-2 text-gray-00'>
                    Ele também está familiarizado com as melhores práticas e metodologias de desenvolvimento de software. Ele se dedica a entregar código de alta qualidade para seus clientes e está sempre disposto a aprender novas tecnologias e técnicas. Sua experiência e comprometimento fazem dele um recurso inestimável para qualquer equipe de desenvolvimento.
                    </p>
                    
                    <Link  href='/#contato'>
                        <button className=' p-3 text-gray-900 mt-6 mb-3'  >Vamos Conversar</button>
                    </Link>
                </div>

                <div className="w-full h-auto m-auto shadow-xl shadow-green-800/10 bg-[#404040] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className='rounded-xl' src={fotoPerfil} alt="" />
                </div>
            </div>
        </div>
  )
}

export default Sobre