import styled from "styled-components";

export const Content = styled.a`
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem;
    
  &:hover div {
    filter: brightness(0.7);
  }

  strong {
    color: var(--title);
  }

  p {
    color: var(--text);
    font-size: .9rem;
  }
`

export const SongCover = styled.div`
  height: 8rem;
  border-radius: 10px;
  margin-bottom: .7rem;
  position: relative;
  background: ${props => `url(${props.cover})`} no-repeat center center / cover;
  transition: .4s;

  button {
    width: 35px;
    height: 35px;
    background: var(--bg);
    outline: none;
    border: 0;
    cursor: pointer;
    border-radius: 10px;

    position: absolute;
    right: 10px;
    bottom: 10px;
    color: rgb(250, 124, 5);
  }


`