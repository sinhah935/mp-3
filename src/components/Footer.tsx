import styled from "styled-components";
import { Link } from 'react-router'

export default function Footer() {

    const StyledFooter = styled.footer`
        background-color: dodgerblue;
        text-align: center;
    `
    return (
        <StyledFooter>
            <p>&#169; All Rights Reserved by Mohammed Sinhah
                <Link to="/credit">Credits</Link>
            </p>
        </StyledFooter>
    )
}