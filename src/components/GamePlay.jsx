import React, { useState } from 'react';
import Totalscore from './Totalscore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        setError("");
        const randomNumber = generateRandomNumber(1, 6);
        setCurrentDice(randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(null);
    };

    const resetScore = () => {
        setScore(0);
    };

    const toggleRules = () => {
        setShowRules((prev) => !prev);
    };

    return (
        <MainContainer>
            <div className="top_section">
                <Totalscore score={score} />
                <NumberSelector
                    error={error}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice 
                currentDice={currentDice}
                rollDice={rollDice} 
            />
            <ButtonContainer>
                <Button onClick={resetScore}>Reset Score</Button>
                <Button onClick={toggleRules}>Show Rules</Button>
            </ButtonContainer>
            {showRules && (
                <RulesContainer>
                    <ul>
                        <li>Select any number.</li>
                        <li>Click on the dice.</li>
                        <li>If the selected number is equal to the dice number, you will get the same point as the dice.</li>
                        <li>If you guess wrong, 2 points will be deducted.</li>
                    </ul>
                </RulesContainer>
            )}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.div`
    padding: 70px;
    .top_section {
        display: flex;
        justify-content: space-around;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    } 
`;

const RulesContainer = styled.div`
    margin-top: 20px;
    ul {
        list-style-type: none;
        padding: 0;
        li {
            margin-bottom: 10px;
            font-size: 18px;
        }
    }
`;
