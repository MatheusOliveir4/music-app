import { MenuBar } from './components/MenuBar'
import { SideBar } from './components/SideBar'
import { SongsList } from './components/SongsList'

import './global.css'

import styles from './App.module.css'
import { SelectedSongProvider } from './hooks/useSelectedSong'

export function App() {
  return (
    <SelectedSongProvider>
      <div className={styles.container}>
        <MenuBar />
        <SongsList />
        <SideBar />
      </div>
    </SelectedSongProvider>
  )
}
