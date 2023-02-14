import { useSelectedSong } from '../../hooks/useSelectedSong';
import { CurrentSongBox } from '../CurrentSongBox';
import { FavoriteArtistCard } from '../FavoriteArtistCard';
import styles from './styles.module.css';

export function SideBar() {
  const { selectedSong } = useSelectedSong()

  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div className={styles['favorite-artists']}>
          <h3>Your Artists</h3>
          <nav>
            <FavoriteArtistCard cover="../src/assets/images/abacate.jpg" artistName="Megadeth"/>
            <FavoriteArtistCard cover="../src/assets/images/banana.jpg" artistName="Angra"/>
            <FavoriteArtistCard cover="../src/assets/images/clock.jpg" artistName="Pink Floyd"/>
            <FavoriteArtistCard cover="../src/assets/images/plant.jpg" artistName="Paramore"/>
            <FavoriteArtistCard cover="../src/assets/images/ice-cream.jpg" artistName="Cold Play"/>
            <FavoriteArtistCard cover="../src/assets/images/laranja.jpg" artistName="Periphery"/>
          </nav>
        </div>

        {selectedSong
          ? <CurrentSongBox />
          : ''
        }        
      </div>
    </aside>
  )
}