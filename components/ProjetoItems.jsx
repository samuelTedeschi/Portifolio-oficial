import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjetoItems = ({title, backgroundImg, projetoUrl}) => {
  return (
    <div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-green-900/10 rounded-xl p-4 group hover:bg-gradient-to-r from-gray-800 to-gray-500 '>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg}/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-green-500 text-2xl tracking-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-green-500 text-center'>React.js</p>
                <Link href={projetoUrl}>
                    <p className='text-center py-3 px-2 rounded-lg bg-gray-900 text-green-700 font-bold text-lg cursor-pointer'>Mais informaçoes</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjetoItems