import { StyledImg, StyledMain, StyledH2, StyledParagraph, StyledDivSegments} from "./Home.tsx";

export default function Certification() {
    return (
        <StyledMain>
            <title>Certification | Resume</title>
            <StyledH2> National Student Data Corps: Data Science Projects </StyledH2>
            <br/>
            <StyledDivSegments className="segments">
                <StyledImg src="/public/img/DataCert.png" alt="Cert"/>
                <StyledParagraph> I participated in a one month program getting into data science.
                    Our task was to collect data in NYC and come up with basic analysis on it.
                    <br/>My goal in pursuing this was to figure out what niche of Software
                    Engineering I wanted to get into. Admittedly, Web Dev and Data Analytics
                    was not something I was interested in, but respected nonetheless.</StyledParagraph>
            </StyledDivSegments>
        </StyledMain>
    )
}