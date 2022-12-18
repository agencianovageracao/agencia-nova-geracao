import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="Nova Geração" />
          <meta name="copyright" content="Nova Geração" />
          <meta name="designer" content="Nova Geração" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="keywords"
            content="Sites Websites modernos criação de sites javascript typescript html css landingpage lançamentos  "
          />
          <meta property="og:title" content="Prismarine Studios" />
          <meta
            property="og:description"
            content="Aqui na Nova Geração nós construíos seu website do seu jeito, sempre com o que há de mais novo e moderno no mercado."
          />
          <meta
            property="og:url"
            content="https://agencianovageracao.com.br/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/brand/icon.svg" />
          <meta property="twitter:image" content="/brand/icon.svg" />
          <meta property="twitter:card" content="summary" />
          <link rel="shortcut icon" href="/brand/icon.svg" />
          <meta
            name="abstract"
            content="Aqui na Nova Geração nós construímos seu website do seu jeito, sempre com o que há de mais novo e moderno no mercado."
          />
          <meta
            name="description"
            content="Aqui na Nova Geração nós construímos seu website do seu jeito, sempre com o que há de mais novo e moderno no mercado."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
