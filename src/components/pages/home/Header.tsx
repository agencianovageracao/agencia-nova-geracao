import { NextPage } from 'next'
import { CaretDown } from 'phosphor-react'

import { Navbar } from '../../globals/Navbar'

export const Header: NextPage = () => {
  return (
    <header className="pb-20">
      <Navbar />
      <div className="mt-28">
        <div className="container flex flex-col lg:flex-row items-center text-center lg:text-left justify-center gap-8">
          <div className="max-w-[757px]">
            <h1
              className="text-4xl xl:text-[64px] font-effective text-black"
              style={{ lineHeight: '50px' }}
            >
              Que tal construírmos o futuro virtual da sua empresa juntos?
            </h1>
            <p className="text-lg text-gray-700 mt-2">
              Aqui na <b>Nova Geração</b> nós construíos seu website do seu
              jeito, sempre com o que há de mais novo e moderno no mercado.
            </p>
            <button className="mt-4 w-full max-w-[200px] xl:max-w-[315px] h-full max-h-[66px] custom-button bg-green-500 py-3 px-7 text-xl font-effective text-black uppercase transition-all hover:bg-green-600">
              Entre em contato
            </button>
          </div>
          <img
            className="max-w-[400px] xl:max-w-[650px] w-full"
            src="/illustrations/hero.webp"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="text-center flex items-center flex-col mt-28">
          <span className="mb-3 font-bold text-gray-600">
            Role para ver mais{' '}
          </span>
          <CaretDown size={45} />
        </button>
      </div>
    </header>
  )
}
