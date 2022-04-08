import Header from '../components/header';
import Footer from '../components/footer';
import Main from './main_page';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MaturDev</title>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <Header/>
      <Main />
      <Footer/>
    </div>
  )
}
