import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Lora:400,700&display=swap');

    body {
      font-family: 'Work Sans', sans-serif;
      color: ${({ theme: { color } }) => color.text};
    }
`;

export default GlobalStyled;
