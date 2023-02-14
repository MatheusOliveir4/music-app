import styled from 'styled-components'

export const Container = styled.a`
  text-align: center;

  strong {
    color: var(--title);
  }
`

export const ArtistCover = styled.div`
  border-radius: 20px;
  height: 70%;
  margin-bottom: .5rem;
  background: ${props => `url(${props.cover})`} no-repeat center center / cover;
`