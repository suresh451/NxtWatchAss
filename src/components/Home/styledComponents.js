import styled from 'styled-components/macro' 

export const HomeDiv = styled.div`
    background-color:${props => props.bgColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:${props => props.textColor};
    padding: 10px;
    width:100%;
`

export const BannerDiv = styled.div`
    display:${props => props.bannerItem};
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    height: 100vh;
    background-size: cover;
    justify-content: space-between;
    height: 200px;
    width: 100%;
    background-size:cover;
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