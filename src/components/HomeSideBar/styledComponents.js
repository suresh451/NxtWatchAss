import styled from 'styled-components/macro' 

export const HomeSideBarContainer = styled.div`
    backgroundColor:${props => props.backgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 100vh;
    padding: 10px;
`