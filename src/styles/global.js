import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    --webkit-font-smoothing: antialiased;

  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  body, * {
    &::-webkit-scrollbar {
         height: 7px;
         width: 7px;
      }

      &::-webkit-scrollbar-track {
         border-radius: 3px;
         background-color: #433F4C;
      }

      &::-webkit-scrollbar-track:hover {
         background-color: #3E3B48;
      }

      &::-webkit-scrollbar-track:active {
         background-color: #464250;
      }

      &::-webkit-scrollbar-thumb {
         border-radius: 4px;
         background-color: #FF9000;
      }

      &::-webkit-scrollbar-thumb:hover {
         background-color: #FFA94F;
      }

      &::-webkit-scrollbar-thumb:active {
         background-color: #FFA01D;
      }
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`