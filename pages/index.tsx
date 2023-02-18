import { Inter } from '@next/font/google'
import Header from '@/components/header'
import SongList from '@/components/songlist'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col justify-center content-center place-items-center'>
      <Header />
      <SongList />
    </div>
  )
}

