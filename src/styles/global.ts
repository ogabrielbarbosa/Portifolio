import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --theme: ${props => props.theme.colors.background}; 
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

    .App{
        margin: 0 20%;
    }
    
    @media screen and (max-width: 1560px){    
        .App{
            margin: 0 10%;
        }   
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

    *:focus {
        outline: none;
    }

    .header{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 15vh;
        justify-content: space-between;
        margin: 0 10%;
        background: ${props => props.theme.colors.background};
        @media screen and (max-width: 768px){        
            transition: all 0.3s ease-in-out;
        }
    }

    .hide{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 100vh;
        justify-content: space-between;
        margin: 0 10%;
        background: ${props => props.theme.colors.background};
    }

    .navigator-close{
        @media screen and (max-width: 768px){    
            display: flex;
        }
    }

    .navigator-open{
        @media screen and (max-width: 768px){    
            display: none;
        }
    }

    .switchCenter{
        display: flex;
    }
`;