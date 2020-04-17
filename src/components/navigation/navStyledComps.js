import styled from 'styled-components';


const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 2.5%;
    background-color: rgb(240, 238, 238); 
    
    @media screen and (max-width: 500px) {
        padding: .5% 0 3%;
        flex-direction: column;
        align-items: center;
    }
`;

const LogoContainer = styled.div`
    width: 14%;
    display: flex;
    align-content: center;
    padding: 10px 2%;
    filter: invert(20%);

    @media screen and (max-width: 500px){
               width: 50%;
               padding: 0;
            }

        .rocket {
            position: absolute;
            top: 14px;
            left: 188px;
            font-size: .5rem;
            color: rgb(22, 24, 150);

            @media screen and (max-width: 500px){
                display: none;
            }
        }
`

const Links = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 500px){
        justify-content: center;
        width: 100%;
    }

        a {
            text-decoration: none;
            color: black;
            padding: 0 5%;

            @media screen and (max-width: 500px){
                padding: 0;
                margin: 0 3%;
                text-align: center;
            }

                &:hover {
                    color: rgb(73, 130, 236);
                }
        }
        .searchContainer {
            margin: 0 6% 0 3%;

            @media screen and (max-width: 500px) {
                display: none;
            }

                .search {
                    width: 100%;
                    padding: 0 15%;
                    height: 3vh;
                    font-size: 1rem;
                    outline: none;

                    
            
                }
        }
        .userAva {
            width: 2%;
            border-radius: 100%;
            position: absolute;
            right: 25px;
            border: rgb(212, 212, 212) 1px solid;
            cursor: pointer;

            @media screen and (max-width: 500px){
                width: 9%;
                right: 15px;
                top: 8px;
            }
                &:hover {
                    opacity: 70%;
                }
        }
`
export { Navigation, LogoContainer, Links} 