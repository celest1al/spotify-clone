import { useRecoilValue } from 'recoil'

import { playlistState } from 'atoms/playlistAtom'

import Song from 'components/Song'

const Songs = (): JSX.Element => {
  const playlist = useRecoilValue(playlistState)

  return (
    <div className="p-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks?.items?.map((track: any, index) => {
        return (
          <Song
            key={`${track?.track?.id}-${index}`}
            track={track}
            order={index}
          />
        )
      })}
    </div>
  )
}

export default Songs
