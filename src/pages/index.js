import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './shared/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './shared/Footer/Footer'
import Experience from './components/experience/Experience'
import Blogs from './Blogs'
import Skills from './Skills'
import Contacts from './Contacts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='container lg:w-[96%] sm:w-full mx-auto'>
    {/* <Navbar/> */}
    <Header/>
    <Skills/>
    <Experience/>
    <Blogs/>
    <Contacts/>
    {/* <Footer/> */}
   </main>
  )
}
