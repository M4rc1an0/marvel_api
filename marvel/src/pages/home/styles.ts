import styled from 'styled-components'

type ImgProps = {
    width?: number
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const ContentHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

export const ContentIntroduction = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContentButtons = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
`

export const ContentImg = styled.div`
    padding-left: 100px;
`

export const ImgBackground = styled.img<ImgProps>`
    width: ${(props) => props.width ? props.width : '100%'};
`
