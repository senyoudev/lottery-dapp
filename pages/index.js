import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import LotteryEntrance from '@/components/LotteryEntrance'


export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Smart contract lottery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <LotteryEntrance />
    </>
  )
}
