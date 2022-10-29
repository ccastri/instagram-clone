import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

const Home: NextPage = () => {

  return (
    <div className="">
      <Head>
        <title>Instagram</title>
      </Head>
      <Header/>


      <Feed/>

      <Modal/>

      
    </div>
  )
}

export default Home
