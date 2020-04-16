import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    height: 85vh;

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
            
                .ctaTitle {
                    text-align: center;
                    color: rgb(206, 206, 206);

                        .ctaH1 {
                            padding-bottom: 3%;
                        }
                }
        }

`

export default HeaderContainer