 import styled from "styled-components"

export default function Header() {

    const StyledHeader = styled.header`
        background-color: dodgerblue;
        text-align: left;
    `
    return (
        <StyledHeader>
            <h1>Mohammed Sinhah Resume</h1>
            <p>This is an online display of Mohammed's Experience</p>
        </StyledHeader>
    )
 }