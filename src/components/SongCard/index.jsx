import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Content, SongCover } from './styles.js'
import { useSelectedSong } from '../../hooks/useSelectedSong.jsx'

export function SongCard({cover, songName, artistName, audio}) {
  const { setSelectedSong } = useSelectedSong()

  function handleSelectSong(event) {
    event.preventDefault()
    
    setSelectedSong({
      cover,
      songName,
      artistName,
      audio
    })
  }

  return (
    <Content href="" onClick={handleSelectSong}>
      <SongCover cover={cover}>
        <button><FontAwesomeIcon icon={faPlay}/></button>
      </SongCover>
      <strong>{songName}</strong>
      <p>{artistName}</p>
    </Content>
  )
}