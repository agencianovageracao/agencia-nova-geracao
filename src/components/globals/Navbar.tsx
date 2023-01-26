import { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as Icon from 'phosphor-react'
import { useState } from 'react'

export const Navbar: NextPage = () => {
  const router = useRouter()

  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isNavbarClosing, setIsNavbarClosing] = useState(false)

  const handleToggleNavbar = () => {
    if (isNavbarOpen) {
      setIsNavbarClosing(true)

      setTimeout(() => {
        setIsNavbarClosing(false)
        setIsNavbarOpen(false)
      }, 500)
    } else {
      setIsNavbarOpen(true)
    }
  }

  return (
    <>
      <nav className="py-9 block xl:hidden">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <button onClick={() => router.push('/')}>
              <img src="/brand/logo.svg" className="w-[90%]" alt="none" />
            </button>
            <button onClick={handleToggleNavbar}>
              <Icon.List size={32} />
            </button>
          </div>
          <div
            className={
              isNavbarOpen
                ? `block fixed top-0 right-0 z-30 navbar-animation-opening ${
                    isNavbarClosing ? 'navbar-animation-closing' : ''
                  }`
                : 'hidden fixed top-0 right-0'
            }
          >
            <div className="bg-white w-screen h-screen items-center py-9">
              <div className="container mx-auto flex flex-col gap-20">
                <div className="flex justify-between w-full">
                  <button onClick={() => router.push('/')}>
                    <img src="/brand/logo.svg" className="w-[90%]" alt="none" />
                  </button>
                  <button onClick={handleToggleNavbar}>
                    <Icon.X size={32} />
                  </button>
                </div>
                <ul className="flex flex-col gap-4 w-full">
                  <li className="w-full">
                    <button
                      className="bg-slate-50 p-5 rounded w-full text-2xl font-effective spacing transition-all hover:text-green-400 hover:bg-slate-100"
                      onClick={() => router.push('/')}
                    >
                      Início
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className="bg-slate-50 p-5 rounded w-full text-2xl font-effective spacing transition-all hover:text-green-400 hover:bg-slate-100"
                      onClick={() => router.push('/#casesdesucesso')}
                    >
                      Cases de Sucesso
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className="bg-slate-50 p-5 rounded w-full text-2xl font-effective spacing transition-all hover:text-green-400 hover:bg-slate-100"
                      onClick={() => router.push('/#servicos')}
                    >
                      Serviços
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className="bg-slate-50 p-5 rounded w-full text-2xl font-effective spacing transition-all hover:text-green-400 hover:bg-slate-100"
                      onClick={() => router.push('/sobre-nos')}
                    >
                      Sobre nós
                    </button>
                  </li>
                  <li>
                    <button className="custom-button bg-green-500 py-3 px-7 text-2xl w-full mt-10 font-effective text-black uppercase transition-all hover:bg-green-600">
                      Entre em contato
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="py-9 hidden xl:block">
        <div className="container flex items-center justify-between">
          <button onClick={() => router.push('/')}>
            <div className="hidden lg:block">
              <img src="/brand/logo.svg" alt="none" />
            </div>
          </button>
          <div>
            <ul className="flex gap-8 items-center">
              <li>
                <button
                  className="text-lg transition-all hover:text-green-600"
                  onClick={() => router.push('/#casesdesucesso')}
                >
                  Cases de Sucesso
                </button>
              </li>
              <li>
                <button
                  className="text-lg transition-all hover:text-green-600"
                  onClick={() => router.push('/#servicos')}
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  className="text-lg transition-all hover:text-green-600"
                  onClick={() => router.push('/sobre-nos')}
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button className="custom-button bg-green-500 py-3 px-7 text-lg font-effective text-black uppercase transition-all hover:bg-green-600">
                  Entre em contato
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
