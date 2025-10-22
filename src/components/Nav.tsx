import { Link } from 'react-router'
import styled from "styled-components";

export default function Nav() {

    const StyledNav = styled.nav`
        background-color: deepskyblue;
        width: 30%;
        @media screen and (max-width: 1000px) {
            width: 100%;
        }
    `
    const StyledUl = styled.ul`
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (max-width: 1000px) {
            flex-direction: row;
        }
    `

    const StyledLi = styled.li`
        border: 2px solid black;
        display: block;
        padding: 2%;
        margin: 3% 0;
        width: 80%;
        text-align: center;
        background-color: dodgerblue;

        @media screen and (max-width: 1000px) {
            display: inline;
            padding: 5px;
        }
    `

    const StyledLink = styled(Link)
    `
        text-decoration: none;
        font-size: calc(2px + 2vw);
        color: black;

        @media screen and (max-width: 1000px) {
            text-decoration: none;
            color: black;
        }
    `

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={'/'}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/education'}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/experience'}>Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/projects'}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/certification'}>Certifications</StyledLink></StyledLi>
                <StyledLi><StyledLink to={'/documents'}>Documents</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>

    )
}