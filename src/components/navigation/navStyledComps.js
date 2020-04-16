import styled from 'styled-components';

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 2.5%;
    background-color: rgb(240, 238, 238);   
`;

const LogoContainer = styled.div`
    width: 14%;
    display: flex;
    align-content: center;
    padding: 10px 2%;
    filter: invert(20%);
`

const Links = styled.div`
    display: flex;
    align-items: center;

        a {
            text-decoration: none;
            color: black;
            padding: 0 5%;

                &:hover {
                    color: rgb(73, 130, 236);
                }
        }
`
export { Navigation, LogoContainer, Links} 