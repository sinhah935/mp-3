import { StyledMain, StyledH2, StyledParagraph} from "./Home.tsx";
import styled from "styled-components";

export default function Documents() {

    const StyledResImg = styled.img`
        max-width: 550px;
        height: auto;
        padding-left: 10px;
    `
    return (
        <StyledMain>
            <title>Documents | Resume</title>
            <StyledH2> Resume </StyledH2>
            <br/>
            <StyledParagraph> Here is my full Resume. Thank you for visiting!</StyledParagraph>
            <br/>
            <div className="segments">
                <StyledResImg id="resume" src="/public/img/Resume.png" alt="Resume"/>
                <br/>
            </div>
        </StyledMain>
    );
}