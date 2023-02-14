import { SongCard } from "../SongCard";
import { Content, MainContainer } from "./styles";

import { api } from "../../services/api.js"

import temple from '../../assets/audios/templeofhate.mp3'
import silentNight from '../../assets/audios/silent-night.mp3'
import girasol from '../../assets/audios/girasol.mp3'


export function SongsList() {
  return (
    <MainContainer>
      <Content>
        <ul>
          <li><a href="">Music</a></li>
          <li><a href="">Podcast</a></li>
          <li><a href="">Live</a></li>
          <li><a href="">Radio</a></li>
        </ul>

        <section>
          <SongCard cover="../src/assets/images/kiwi.jpg" songName="Temple of Hate" artistName="Angra" audio={temple}/>
          <SongCard cover="../src/assets/images/abacate.jpg" songName="Inhale" artistName="Plini" audio={silentNight}/>
          <SongCard cover="../src/assets/images/banana.jpg" songName="Tornado of Souls" artistName="Megadeth" audio={girasol}/>
        </section>
      </Content>
    </MainContainer>
  )
}