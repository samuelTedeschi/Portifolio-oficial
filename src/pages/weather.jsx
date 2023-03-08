import React from 'react'
import Image from 'next/image'
import tempoImg from 'public/assets/projetos/tempo.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const property = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>

            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={tempoImg} />

                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Weather App</h2>
                    <h3>React / Next.js / OpemWeather</h3>
                </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Site</p>
                <h2 className='mb-5'>Weather</h2>
                <p className='mb-5'>Um site de previsão de tempo é uma plataforma on-line que fornece informações sobre as condições meteorológicas futuras para uma determinada localização. Ele usa dados meteorológicos e modelos climáticos para gerar previsões precisas sobre temperatura, umidade, vento, precipitação e condições climáticas.</p>

                <a
                href='https://github.com/samuelTedeschi/weather-app'
                target='_blank'
                rel='noreferrer'
                >
                    <button className='px-8 py-2 mt-4 mr-8'>Codigo</button>
                </a>
                
                <a
                href='https://weather-app-phi-rosy.vercel.app/'
                target='_blank'
                rel='noreferrer'
                >
                    <button className='px-8 py-2 mt-4'>Site</button>
                </a>
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#0B0B09] rounded-xl py-4'>
                <div  className='p-2'>
                    <p className='text-center font-bold pb-2 text-[#E4973A]'>Technologies</p>
                
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-[#FBF6EF] py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> React
                        </p>
                        <p className='text-[#FBF6EF] py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Tailwind
                        </p>
                        <p className='text-[#FBF6EF] py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Javascript
                        </p>
                        <p className='text-[#FBF6EF] py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> OpemWeather
                        </p>
                    </div>
                </div>
            </div>

        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>

        </div>
    </div>
  )
}

export default property