import styled from 'styled-components';

const SpotlightContainer = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    

        .spotlight {
            display: flex;
            /* flex-wrap: wrap; */
            padding: 1%;
            flex-direction: column;
            width: 33%;
            filter: drop-shadow(0 6px 5px rgb(110, 110, 110));
            color: rgb(91, 100, 112);
    }
`

export default SpotlightContainer