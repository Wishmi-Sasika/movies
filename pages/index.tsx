import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import MovieList from '@/components/MovieList'
import useMovieList from '@/hooks/useMovieList'
import InfoModal from '@/components/InfoModal'
import useInforModal from '@/hooks/useInfoModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: movie = [] } = useMovieList();
  const { isOpen, closeModal } = useInforModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className='pb-40'>
        <MovieList title='Trending Now' data={movie} />
      </div>
    </>
  )
}
