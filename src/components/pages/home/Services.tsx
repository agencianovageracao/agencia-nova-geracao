import { NextPage } from 'next'
import * as Icon from 'phosphor-react'

export const Services: NextPage = () => {
  return (
    <section className="my-28">
      <div className="container flex flex-col xl:flex-row justify-between gap-16 items-center">
        <div className="max-w-[563px] w-full text-center xl:text-left">
          <h1 className="text-5xl font-effective text-black">
            O que nós temos a oferecer de novo para sua empresa?
          </h1>
          <p className="mt-2 text-lg">
            Veja o que temos a proporcionar para sua produtividade e seu alcance
            nas redes sociais.
          </p>
          <button className="mt-4 w-full max-w-[315px] h-full max-h-[66px] custom-button bg-green-500 py-3 px-7 text-xl font-effective text-black uppercase transition-all hover:bg-green-600">
            Entre em contato
          </button>
        </div>
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 gap-8 gap-y-20">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-gray-200 w-20 h-20 flex items-center justify-center rounded-full">
              <Icon.Database size={50} />
            </div>
            <h1 className="text-4xl font-effective mt-5">Websites</h1>
            <p className="text-lg mt-2">
              Construa já o seu website com o que existe de mais novo e rápido
              no mercado digital.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-gray-200 w-20 h-20 flex items-center justify-center rounded-full">
              <Icon.Database size={50} />
            </div>
            <h1 className="text-4xl font-effective mt-5">Marketing Digital</h1>
            <p className="text-lg mt-2">
              Quer alcançar mais pessoas? Aqui é o lugar certo, anúncios de
              qualidade para atingir o público que <b>você quer</b>.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-gray-200 w-20 h-20 flex items-center justify-center rounded-full">
              <Icon.Database size={50} />
            </div>
            <h1 className="text-4xl font-effective mt-5">Criação de Marca</h1>
            <p className="text-lg mt-2">
              Construa sua marca se adaptando as tendências do mercado e obtenha
              mais resultados.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-gray-200 w-20 h-20 flex items-center justify-center rounded-full">
              <Icon.Database size={50} />
            </div>
            <h1 className="text-4xl font-effective mt-5">Aplicativos</h1>
            <p className="text-lg mt-2">
              Quer um aplicativo para seu comércio? ou um cardápio digital? É
              aqui mesmo! Entre em contato <b>agora mesmo</b>!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
