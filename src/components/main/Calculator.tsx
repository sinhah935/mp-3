import { useState } from 'react'
import styled from "styled-components";

export default function Calculator() {

    const [number1, setNumber1] = useState<number | string>('');
    const [number2, setNumber2] = useState<number | string>('');
    const [output, setOutput] = useState<number | string>('');
    const [color, setColor] = useState(0);

    function ColorChange(num: number) {
        if (num <= 0) {
            //1 represents red
            setColor(0);
        }
        else
        {
            //0 for black
            setColor(1);
        }
    }

    function doAdd()  {
        const result = Number(number1) + Number(number2)
        setOutput(result);
        ColorChange(result);
    }
    function doSubtract() {
        const result = Number(number1) - Number(number2)
        setOutput(result);
        ColorChange(result);
    }
    function doMultiply() {
        const result = Number(number1) * Number(number2)
        setOutput(result);
        ColorChange(result);
    }
    function doDivide() {
        const result = Number(number1) / Number(number2)
        setOutput(result);
        ColorChange(result);
    }
    function doExp() {
        let result = 1;
        for (let i = Number(number1); i < Number(number2); i = i + 1)
        {
            result = result * Number(number2);
        }
        setOutput(result);
        ColorChange(result);
    }

    function doClear() {
        setOutput('');
        setNumber1('');
        setNumber2('');
        setColor(0);
    }

    //Styling for the Calcultor section of Projects
    const StyledDivCalculator = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        gap: 20px;
        margin: 20px;
        padding-bottom: 50px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    `

    const StyledDivInputs = styled.div`
        display: flex;
        flex-direction: column;
    `

    const StyledInput = styled.input`
        padding: 5px;
        font-size: calc(14px + 0.5vw);
    `

    const StyledDivOptions = styled.div`
        display: grid;
        gap: 10px;
        margin-top: 20px;
    `

    const StyledButtons = styled.button`
        padding: 10px;
        font-size: 18px;
        cursor: pointer;
    `

    const StyledH2 = styled.h2<{ text?: number }>
    `
        color: ${({ text }) => (text ? "black" : "red")};
    `;

    return (
        <StyledDivCalculator className="calc-proj">
            <h2 className="project"> Calculator: </h2>

            <StyledDivInputs className="input-sec">
                <label htmlFor="one" >Give me number:</label>
                <StyledInput
                    id="one"
                    type="number"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}/>
                <label htmlFor="two">Give me number:</label>
                <StyledInput
                    id="two"
                    type="number"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}/>
            </StyledDivInputs>

            <StyledH2 id="output" text={color}>{output}</StyledH2>

            <StyledDivOptions className="calc-options">
                <StyledButtons onClick={doAdd}>+</StyledButtons>
                <StyledButtons onClick={doSubtract}>-</StyledButtons>
                <StyledButtons onClick={doMultiply}>X</StyledButtons>
                <StyledButtons onClick={doDivide}>/</StyledButtons>
                <StyledButtons onClick={doExp}>^</StyledButtons>
                <StyledButtons onClick={doClear}>CE</StyledButtons>
            </StyledDivOptions>
        </StyledDivCalculator>
    );
}