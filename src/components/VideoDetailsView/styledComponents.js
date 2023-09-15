import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
    background-color:${props => props.bgColor};
    width:100%;
`
export const VideoDetailsDiv = styled.div`
    display: flex;
    flex-direction: row;
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