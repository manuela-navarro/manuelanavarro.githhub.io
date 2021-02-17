import NavBar from '../components/NavBar'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/globals.scss'

type NextAppComponent = ({ Component, pageProps }: AppProps) => JSX.Element

const MyApp: NextAppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Portafolio Manuela Navarro</title>
        <link rel="preload" href="/fonts/Spartan.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Ageo/Ageo-Bold.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Ageo/Ageo-Regular.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Ageo/Ageo-Light.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Ageo/Ageo-Medium.otf" as="font" crossOrigin="" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
