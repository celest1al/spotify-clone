import { useState, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline'

import { useSpotify } from '../../hooks/spotify'
import { playlistIdState } from '../../atoms/playlistAtom'

function Sidebar() {
  const { data: session } = useSession()
  const [playlist, setPlaylist] = useState([])
  const [, setPlaylistId] = useRecoilState(playlistIdState)
  const spotifyApi = useSpotify()

  useEffect(() => {
    if (spotifyApi?.getAccessToken()) {
      spotifyApi.getUserPlaylists().then(dataPlaylist => {
        setPlaylist(dataPlaylist?.body?.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="text-gray-500 p-5 text-xs border-r border-gray-900 overflow-y-auto h-screen scrollbar-hide lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-block">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut({ callbackUrl: '/login' })}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist*/}
        {playlist.map(playlistItem => {
          return (
            <p
              className="cursor-pointer hover:text-white"
              key={playlistItem?.id}
              onClick={() => setPlaylistId(playlistItem?.id)}
            >
              {playlistItem?.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
