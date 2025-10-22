import Header from "./Header.tsx";
import Nav from "./Nav";
import Footer from "./Footer.tsx";
import { Routes, Route } from "react-router";
import  Home  from "./main/Home.tsx"
import Projects from "./main/Projects.tsx";
import Certification from "./main/Certification.tsx";
import Experience from "./main/Experience.tsx";
import Education from "./main/Education.tsx";
import Documents from "./main/Documents.tsx";
import styled from "styled-components";
import  GlobalStyle  from '../GlobalStyle.tsx'

export default function Root() {

    const StyledDivWrapper = styled.div`
        width: 100vw;
        margin: 0 auto;
    `

    const StyledDivContainer = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        
        @media screen and (max-width: 1000px) {
            flex-direction: column;
            
        }
    `
    return (
        <>
            <GlobalStyle/>
            <StyledDivWrapper>
            <Header />
                <StyledDivContainer>
                <Nav/>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/education'} element={<Education/>}/>
                        <Route path={'/experience'} element={<Experience/>}/>
                        <Route path={'/projects'} element={<Projects/>}/>
                        <Route path={'/certification'} element={<Certification/>}/>
                        <Route path={'/documents'} element={<Documents/>}/>
                        <Route path={'/credit'} element={<Home/>}/>
                    </Routes>
                </StyledDivContainer>
                <Footer/>
            </StyledDivWrapper>
        </>
    )
}