import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    height: 85vh;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        /* height: 84vh; */
    }

        .ctaImgContainer {
            width: 100%;
        
                .ctaImg {
                    width: 100%;
                    height: 100%;
                    object-fit: fill;
                }
        }
        .ctaInfoContainer {
            display: flex;
            justify-content: center;
            text-align: center;
            width: 30%;
            right: 80px;
            top: 160px;
            background-color: rgba(0, 0, 0, 0.37);
            backdrop-filter: blur(2px);
            position: absolute; 
            padding: 3%; 
            
            @media screen and (max-width: 500px) {
                position: static;
                width: 100%;
                background-color: rgb(240, 238, 238);
                padding: 0;
            }
            
                .ctaTitle {
                    text-align: center;
                    color: rgb(206, 206, 206);

                    @media screen and (max-width: 500px) {
                        color: grey;
                        font-size: .9rem;
                    }

                        .ctaH1 {
                            padding-bottom: 3%;

                            @media screen and (max-width: 500px) {
                                background-color: rgba(0, 0, 0, 0.37);
                                padding: 3% 0;
                                color: white;
                                /* backdrop-filter: blur(3px); */
                            }
                        }

                        p {
                            @media screen and (max-width: 500px) {
                                padding: 5%;
                            }
                        }
                }
        }

`

export default HeaderContainer