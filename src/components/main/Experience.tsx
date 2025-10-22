import {StyledImg, StyledMain, StyledH2, StyledParagraph, StyledDivSegments} from "./Home.tsx";

export default function Experience() {

    return (
        <StyledMain>
            <title>Experience | Resume</title>
            <StyledH2> Software Engineer Intern : May 2025 - Aug 2025 </StyledH2>
            <br/>
            <StyledDivSegments className="segments">
                <StyledImg src={`../../../TriumphInterns.jpeg`} alt="Interns"/>
                <StyledParagraph> I worked at Triumph Group as a Software Engineer Intern.
                    The company works on producing Engine Control Units and Fuel Pumps</StyledParagraph>
            </StyledDivSegments>
            <StyledDivSegments className="segments">
                <StyledParagraph>The work I have done includes:</StyledParagraph>
                <ul>
                    <li> Contributed to avionics software development under DO-178B/C guidelines, updating compliance
                        documentation to support certification readiness
                    </li>
                    <li> Implemented channel synchronization and Major Frame timing on dual-channel ECU hardware using
                        Green Hills INTEGRITY RTOS and MPSoC architecture
                    </li>
                    <li> Used CANape to monitor timing signals and validate synchronization behavior across channels in
                        a real-time embedded environment
                    </li>
                </ul>
            </StyledDivSegments>
            <StyledDivSegments className="segments">
                <StyledImg src={`../../../CANape.png`} alt="CAN"/>
                <StyledParagraph>Additionally, I have gotten to work with tools such as CANape, Oscilloscopes,
                    Function Generators, Green Hills Integrity, and Xilinx MPSoC.</StyledParagraph>
            </StyledDivSegments>
        </StyledMain>
    );
}