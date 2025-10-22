import styled from "styled-components";


export const StyledMain = styled.main`
        background-color: aliceblue;
        width: 70%;
        min-height: 100vh;
    
        @max screen and (max-width: 1000px) {
            width: 100%;
        }
    `
export const StyledParagraph = styled.p`
        padding-left: 10px;
        font-size: calc(14px + 0.5vw);
    `

export const StyledImg = styled.img`
        max-width: 300px;
        height: auto;
        
        @media screen and (max-width: 1000px) {
            display: block;
            margin: auto;
        }
    `

export const StyledH2 = styled.h2`
        text-align: center;
        padding-top: 5px;
    `

//This StyleComponent is for Divs with the className of segments
export const StyledDivSegments = styled.div`
    
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 40px;
    
    @media screen and (max-width: 1000px) {
        display: block;
    }
`

export default function Home() {


    return (

        <StyledMain>
            <title>Home | Resume</title>
            <StyledH2> Welcome to my Online Resume! </StyledH2>
            <br/>
            <StyledDivSegments className="segments">
                <StyledImg src="/img/pfp2.jpg" alt="pfp"/>
                <StyledParagraph>  to my online resume! <br/>
                    My name is Mohammed Sinhah. I am 21 years old and
                    was born and raised in Brooklyn, NY.<br/>
                    I am interested in Cyber Physical
                    Systems and would like to work in the aviation industry.</StyledParagraph>
            </StyledDivSegments>
        </StyledMain>
    )
}