import styled from 'styled-components';

const SpotlightContainer = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    
        @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        background-color: rgb(240, 238, 238); 
    }

        .spotlight {
            display: flex;
            /* flex-wrap: wrap; */
            padding: 1%;
            flex-direction: column;
            width: 33%;
            filter: drop-shadow(0 6px 5px rgb(110, 110, 110));
            color: rgb(91, 100, 112);


            @media screen and (max-width: 500px) {
                width: 100%;
                padding: 5%;
            }

            h2 {
                padding: 1%;
                background-color: rgba(88, 86, 86, 0.596);
                font-family: 'Baloo Bhaina 2';
                color: rgb(243, 243, 243);
                position: absolute;
                width: 93.7%;
                backdrop-filter: blur(2px);

                @media screen and (max-width: 500px) {
                width: 90.1%;
            }
            }
            img {

                width: 600px;
                height: 500px;

                @media screen and (max-width: 500px) {
                    height: 390px;
                    object-fit: fill;
                }
            }
            p {
                padding: 7%;
                background-color: rgb(212, 207, 212);
                line-height: 1.4;
                text-align: left;
                font-family: 'Roboto Condensed';
                font-size: 1.3rem;

                @media screen and (max-width: 500px) {
                    font-size: 1rem;
                }
            }


    }
`

export default SpotlightContainer