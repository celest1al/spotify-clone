import { useSpotify } from 'hooks/spotify'

const Song = ({ order, track }): JSX.Element => {
  const spotifyApi = useSpotify()

  console.log('track: ', track)

  return (
    <div>
      <div>
        <p>{order + 1}</p>
        <img
            className='h-10 w-10'
          src={track?.track?.album?.images?.[0]?.url}
          alt={track?.track?.name}
        />
      </div>
    </div>
  )
}

export default Song
