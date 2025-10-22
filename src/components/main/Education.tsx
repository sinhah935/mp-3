import {StyledImg, StyledMain, StyledH2, StyledParagraph, StyledDivSegments} from "./Home.tsx";

export default function Education() {

    return (
        <StyledMain>
            <title>Education | Resume</title>
            <StyledH2> Boston University </StyledH2>
            <br/>
            <StyledDivSegments className="segments">
                <StyledImg src="/public/img/Bu_Logo.png" alt="BU_LOGO"/>
                <StyledParagraph> I study at Boston University. I am a senior studying Computer Science. I have made Dean's list for
                    the past two semesters.</StyledParagraph>
            </StyledDivSegments>
        </StyledMain>
    );
}