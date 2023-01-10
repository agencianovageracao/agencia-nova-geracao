import Head from 'next/head'

import { Footer } from '../components/globals/Footer'
import { Faq } from '../components/pages/home/Faq'
import { Feedbacks } from '../components/pages/home/Feedbacks'
import { Header } from '../components/pages/home/Header'
import { Headline } from '../components/pages/home/Headline'
import { Services } from '../components/pages/home/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Agência Nova Geração</title>
      </Head>
      <Header />
      <main>
        <Headline />
        <Services />
        <Feedbacks />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
