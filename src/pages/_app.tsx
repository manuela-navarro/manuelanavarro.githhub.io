import NavBar from '../components/NavBar';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.scss';

type NextAppComponent = ({ Component, pageProps }: AppProps) => JSX.Element;

const MyApp: NextAppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Portafolio Manuela Navarro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/fonts/Spartan.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Ageo/Ageo-Bold.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Ageo/Ageo-Regular.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Ageo/Ageo-Light.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Ageo/Ageo-Medium.otf" as="font" crossOrigin="" />
        <link rel="icon" href="/static/images/manchaTituloNaranja.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
