import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  min-width: 250px;
  height: 420px;
  background-color: var(--actual-song-bg);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  text-align: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  h3 {
    color: var(--bg);
    font-weight: 500;
  }

  strong {
    color: var(--bg);
    font-weight: 500;
  }

  p {
    margin-top: .5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`

export const CurrentSongCover = styled.div`
  background: ${props => `url(${props.cover})`} no-repeat center center / cover;
  border-radius: 10px;
  height: 120px;
  margin: 1.5rem 0;
` 

export const AudioControls = styled.div`
  margin: 2rem 0;
`

export const AudioDurationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: #fff;
    font-weight: 500;
    font-size: 0.9rem;
  }

  input[type="range"] {
    appearance: none;
    outline: none;
    background: var(--text-secondary);
    border-radius: 20px;
    height: 3px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 11px; 
      height: 11px;
      background: var(--text-secondary);
      border-radius: 50%;
      border: 3px solid #fff;
      cursor: pointer;
    }
  }
`

export const AudioButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 100%;
    border-radius: 10px;
    color: white;

    &:hover {
      background: var(--bg-secondary);
    }
  }
`
