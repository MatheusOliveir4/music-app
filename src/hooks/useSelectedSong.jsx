import { createContext, useContext, useState } from "react";

const SelectedSongContext = createContext({})

export function SelectedSongProvider({ children }) {
  const [selectedSong, setSelectedSong] = useState(null)

  return (
    <SelectedSongContext.Provider value={{selectedSong, setSelectedSong}}>
      {children}
    </SelectedSongContext.Provider>
  )
} 

export function useSelectedSong() {
  const context = useContext(SelectedSongContext)
  return context
}