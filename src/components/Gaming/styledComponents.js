import styled from 'styled-components'

export const GamingContainer = styled.div`
    background-color:${props => props.bgColor};
    display: flex;
    flex-direction: column;
`

export const GamingDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const UlList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const FailureHeading = styled.h1`
    font-size: 25px;
    color:${props => props.headingColor};
`

export const FailureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`
export const FailureButton = styled.button`
    background-color:blue;
    height:50px;
    width:80px;
    border-radius:5px;

`

export const FailureImg = styled.img`
    width:300px;
`