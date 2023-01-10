import { NextPage } from 'next'
import Link from 'next/link'

export const Footer: NextPage = () => {
  return (
    <footer className="bg-green-500 p-20">
      <div className="container flex items-ceenter justify-between items-center pb-20  border-b-8 border-b-black">
        <h1 className="text-5xl font-effective max-w-[650px]">
          Vamos começar um projeto juntos?
        </h1>
        <div className="flex flex-col items-end justify-end">
          <p className="max-w-[521px] text-right">
            Seu projeto merece ficar em boas mãos, conte com a nossa agência
            para isso. Tem todas informações e está preparado? Então vamos
            começar!
          </p>

          <button className="w-fit custom-button mt-5 text-3xl bg-black py-3 px-10 font-effective text-white uppercase transition-all hover:bg-gray-900">
            Entre em Contato
          </button>
        </div>
      </div>
      <div className="py-10 mt-10">
        <div className="container">
          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: '2fr 1fr 1fr' }}
          >
            <div>
              <div className="max-w-[150px]">
                <img src="/brand/iconwhite.svg" alt="Logo" />
              </div>
              <p className="text-slate-800 text-lg mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, molestiae dolorem obcaecati sint et totam illo vitae
                est corporis ullam, debitis voluptatum adipisci consequuntur.
                Inventore tenetur fugiat deleniti quia accusamus.
              </p>
              <a className="text-lg mt-5 block text-black">
                Todos os direitos reservados ₢ Agência Nova Geração 2022
              </a>
            </div>
            <div>
              <h1 className="text-2xl font-effective text-black">
                Links úteis
              </h1>
              <ul className="mt-10 flex flex-col gap-2">
                <li className="text-lg transition-all hover:text-white">
                  <Link href="/">Início</Link>
                </li>
                <li className="text-lg transition-all hover:text-white">
                  <Link href="/#servicos">Serviços</Link>
                </li>
                <li className="text-lg transition-all hover:text-white">
                  <Link href="/sobre-nos">Sobre Nós</Link>
                </li>
                <li className="text-lg transition-all hover:text-white">
                  <Link href="/#projetos">Projetos</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-effective text-black">
                Entre em contato
              </h1>
              <ul className="mt-10 flex flex-col gap-2">
                <li className="text-lg transition-all hover:text-white">
                  <Link href="#">Discord</Link>
                </li>
                <li className="text-lg transition-all hover:text-white">
                  <Link href="#">Whatsapp</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
