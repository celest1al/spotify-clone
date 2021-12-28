import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useRecoilValue, useRecoilState } from 'recoil'

import { useSpotify } from '../../hooks/spotify'
import { playlistIdState, playlistState } from '../../atoms/playlistAtom'

const colors = [
  'from-indigo-500',
  'from-purple-500',
  'from-pink-500',
  'from-red-500',
  'from-orange-500',
  'from-yellow-500',
  'from-green-500',
  'from-teal-500',
]

const Center = () => {
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)
  const { data: session } = useSession()
  const spotifyApi = useSpotify()

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }, [playlistId])

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const dataPlaylist = await spotifyApi.getPlaylist(playlistId)

        if (dataPlaylist?.statusCode === 200) {
          setPlaylist(dataPlaylist?.body)
        }
      } catch (error) {
        console.error('error fetch playlist: ', error)
      }
    }

    fetchPlaylist()
  }, [spotifyApi, playlistId, setPlaylist])

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10"
            src={session?.user?.image}
            alt={session?.user?.name}
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black h-80 text-white p-8 ${color}`}
      >
        <img
          className="w-44 h-44 shadow-xl "
          src={playlist?.images?.[0]?.url}
          alt="playlist image"
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Center
