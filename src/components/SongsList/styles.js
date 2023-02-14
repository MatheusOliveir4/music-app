import styled from 'styled-components'

export const MainContainer = styled.main`
  flex: 1;
`

export const Content = styled.div`
  padding: 0 3rem 2rem;
  height: 100%;

  ul {
    padding: 1.5rem 0;
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin-left: 1.5rem;
      font-weight: 600;
      color: var(--text);

      transition: .3s;

      &:first-child {
        margin: 0;
      }

      &:hover {
        color: var(--title);
      }
    }
  }

  section {
    border: 1px solid var(--border);
    border-bottom: 0;
    border-radius: 10px;

    width: 100%;
    height: calc(100vh - 4.5rem);
    padding: 1.5rem;
    overflow: auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 14rem;
    gap: 1rem;

    &::-webkit-scrollbar {
      width: 7px;
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: #DFE9EB;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #B8C0C2;
    }
  }
`