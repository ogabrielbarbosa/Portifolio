import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.background}; 
    }

    html{
        scroll-behavior: smooth;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button{
        cursor: pointer;
        border: none;
    }

    .swiper{
        padding: 1%
    }

    .slides-1{
        display: none;
    }

    .slides-2{
        display: flex;
    }

    @media screen and (max-width: 1100px){    
        .slides-1{
            display: flex;
        }

        .slides-2{
            display: none;
        }
    }
`;