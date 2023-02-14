import { useRef, useState } from 'react';
import { useSelectedSong } from '../../hooks/useSelectedSong.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRepeat,
  faBackwardStep,
  faPlay,
  faPause,
  faForwardStep,
  faShuffle
} from '@fortawesome/free-solid-svg-icons'

import {
  Content,
  CurrentSongCover,
  AudioControls,
  AudioDurationContent,
  AudioButtons
} from "./styles";

export function CurrentSongBox() {
  const [isPlaying, setIsPlaying] = useState(false) 
  const audioRef = useRef()
  const sliderRef = useRef()
  const songDurationTime = audioRef.current?.duration
  const [currentTimeSong, setCurrentTimeSong] = useState("0:00")
  const formattedSongDurationTime = formatSongTime(songDurationTime)

  const { selectedSong } = useSelectedSong()
  
  function changeCurrentTimeSong() {
    setCurrentTimeSong(formatSongTime(audioRef.current?.currentTime))
  }
  
  function songChangeTime() {
    audioRef.current.currentTime = sliderRef.current.value
  }

  function sliderInCurrentTime() {
    sliderRef.current.value = audioRef.current.currentTime
  }
 
  function togglePlayPauseSong(event) {
    event.preventDefault()

    setIsPlaying(!isPlaying)

    !isPlaying
      ?audioRef.current?.play()
      :audioRef.current?.pause()
  }

  function repeatSong(event) {
    event.preventDefault()

    audioRef.current?.load()

    isPlaying
      ?audioRef.current?.play()
      :audioRef.current?.pause()
  }

  function formatSongTime(time) {
    const songFormatMin = Math.trunc(time / 60)
    const songFormatSeg = Math.ceil(time % 60)
    let songFormatTotal = ''

    songFormatMin < 10
      ? `${songFormatMin}:0${songFormatSeg}`
      : `${songFormatMin}:${songFormatSeg}`

    songFormatSeg < 10
      ? songFormatTotal = `${songFormatMin}:0${songFormatSeg}`
      : songFormatTotal = `${songFormatMin}:${songFormatSeg}`

    return songFormatTotal
  }

  return (
    <Content>
      <h3>Now Playing</h3>
      <CurrentSongCover cover={selectedSong.cover}/>
      <strong>{selectedSong.songName}</strong>
      <p>{selectedSong.artistName}</p>

      <AudioControls>
        <audio
          src={selectedSong.audio}
          onTimeUpdate={() => {
            changeCurrentTimeSong()
            sliderInCurrentTime()
          }}
          ref={audioRef}
          autoPlay
        >
        </audio>
        <AudioDurationContent>
          <strong>{currentTimeSong}</strong>
          <input
            type="range"
            min={0}
            max={songDurationTime}
            ref={sliderRef}
            onChange={songChangeTime}
          />
          <strong>{formattedSongDurationTime}</strong>
        </AudioDurationContent>

        <AudioButtons>
          <a href="" onClick={repeatSong}><FontAwesomeIcon icon={faRepeat}/></a>
          <a href=""><FontAwesomeIcon icon={faBackwardStep}/></a>
          <a href="" onClick={togglePlayPauseSong}>
            {isPlaying 
              ? <FontAwesomeIcon icon={faPause}/> 
              : <FontAwesomeIcon icon={faPlay}/>
            }
          </a>
          <a href=""><FontAwesomeIcon icon={faForwardStep}/></a>
          <a href=""><FontAwesomeIcon icon={faShuffle}/></a>
        </AudioButtons> 
      </AudioControls>
    </Content>
  )
}