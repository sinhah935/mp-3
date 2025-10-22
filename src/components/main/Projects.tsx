import { StyledImg, StyledMain, StyledH2, StyledParagraph, StyledDivSegments} from "./Home.tsx";
import Calculator from "./Calculator.tsx";
export default function Projects() {


    return (
        <StyledMain>
            <StyledH2> My Projects </StyledH2>
            <br/>
            <StyledDivSegments className="segments">
                <StyledImg src="../../../public/img/car.png" alt="Car"/>
                <div className="project-desc">
                    <StyledH2 className="project"> Autonomous F1Tenth Vehicle</StyledH2>
                    <br/>
                    <StyledParagraph className="proj-description"> This is a project I worked on with my club members in the BU
                        F1Tenth group.
                        I have recently been appointed Vice President of the club, and my goal is to
                        aid new members into constructing their own car and participate in a
                        university tournament. <br/> The car itself is controlled by an NVIDIA Nano Jetson, which is
                        responsible for
                        the computations necessary for Autonomous driving. The Lidar in the front collects data
                        regarding the
                        car's surroundings and feeds this into the Jetson. This data is then used to calculate the angle
                        of the
                        servos to adjust turning radius. Speed is also another variable changed. This is all done
                        leveraging PID
                        control.</StyledParagraph>
                </div>
            </StyledDivSegments>

            <StyledDivSegments className="segments">
                <StyledImg src="../../../public/img/board.png" alt="Ball-Board"/>
                <div className="project-desc">
                    <StyledH2 className="project"> Ball-Balancing</StyledH2>
                    <br/>
                    <StyledParagraph className="proj-description"> This project was done during my participation
                        in CS454: Embedded Systems. Throughout this course, we learned how to
                        program on a dsPIC33. We learned how to program I/O devices, learned
                        UART Serial Communication, and eventually worked our way to learn
                        PID control to center a ball in the middle of a Touch Screen Board.</StyledParagraph>
                </div>
            </StyledDivSegments>

            <StyledDivSegments className="segments">
                <div className="project-desc">
                    <StyledH2 className="project"> Image Processing Server</StyledH2>
                    <StyledParagraph className="proj-description"> This project was done during my participation
                        in CS350: Distributed Systems. The objective was to create an Image
                        Processing Server that took in an influx of image changing requests.
                        Our goal was to have multiple threads perform each request in a
                        First In First Out(FIFO) scheduler. To prevent race conditions and
                        multiple threads picking up the same request, I implemented
                        semaphores/mutexes to ensure one thread had write access to the
                        queue of requests at a time.</StyledParagraph>
                </div>
            </StyledDivSegments>
            <Calculator/>


        </StyledMain>
    )
}