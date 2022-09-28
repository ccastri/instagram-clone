import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Feed from '../components/Feed'
import { useSession, signOut, signIn } from "next-auth/react"

const Home: NextPage = () => {
  const {data: session} =useSession();
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
