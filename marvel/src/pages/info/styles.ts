import styled from 'styled-components'

export const ComeBack = styled.div`
    width: 120px;
    margin: 20px 50px;
`

export const ContentInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 50px;
`

export const ContentPerson = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;

    img {
        width: 300px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        img {
            width: 275px;
        }
    }

    @media (max-width: 375px) {
        img {
            width: 100%;
        }
    }
`

export const Description = styled.div`
    display: flex;
    width: 100%;
    padding: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (max-width: 920px) {
        padding: 0;

        h2 {
            font-size: 20px;
            padding-top: 20px;
        }

        h5 {
            font-size: 15px;
            padding: 10px;
        }
    }

    @media (max-width: 375px) {

        h2 {
            padding: 10px;
        }

        h5 {
            padding: 10px;
        }
    }
`

export const Appearances = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 920px) {
        flex-direction: column;
        align-items: center;
    }
`