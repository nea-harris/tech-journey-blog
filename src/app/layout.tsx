import './globals.css'
import type {Metadata} from 'next'
import {Pacifico} from 'next/font/google';
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";
import { FaLetterboxd } from 'react-icons/fa6';

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Pacifico({ weight: '400', subsets: ['latin']})
const title = 'Lynnea\'s Site';
const description = 'This my personal site';

const SocialLinks = {
  twitter: '#twitter',
  github: '#github',
  instagram: '#insta',
  email: 'mailto:peculiarchildren2@gmail.com',
  letterboxd: 'https://letterboxd.com/NeaRatesMovies',
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full'} data-theme="dark">
      <body className={`${font.className} flex flex-col min-h-screen`}>
      <NavBarContainer title={title} >
        <main className={'flex-1 max-w-6xl py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
