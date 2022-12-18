import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Navbar: NextPage = () => {
  const router = useRouter()
  
  return (
    <nav className='py-9'>
      <div className="container flex items-center justify-between">
        <button>
          <Image src="/brand/logo.svg" alt="none" width={315} height={50} />
        </button>
        <div>
          <ul className='flex gap-8 items-center'>
            <li>
              <button className='text-lg' onClick={()=> router.push('/')}>
                Início
              </button>
            </li>
            <li>
              <button className='text-lg' onClick={()=> router.push('/#casesdesucesso')}>
                Cases de Sucesso
              </button>
            </li>
            <li>
              <button className='text-lg' onClick={()=> router.push('/#servicos')}>
                Serviços
              </button>
            </li>
            <li>
              <button className='text-lg' onClick={()=> router.push('/sobre-nos')}>
                Sobre nós
              </button>
            </li>
            <li>
              <button className='custom-button bg-green-500 py-3 px-7 text-lg font-effective text-black uppercase transition-all hover:bg-green-600'>
                Entre em contato
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
