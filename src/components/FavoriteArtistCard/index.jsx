import { Container, ArtistCover } from './styles.js'

export function FavoriteArtistCard({cover, artistName}) {
  return (
    <Container href="">
      <ArtistCover cover={cover}/>
      <strong>{artistName}</strong>
    </Container>     
  )
}