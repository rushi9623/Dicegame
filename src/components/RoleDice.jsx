import React from "react";
import styled from "styled-components";

const RoleDice = ({ setCurrentDice, currentDice, rollDice }) => {
    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/img/dice/dice_${currentDice}.png`} alt="Dice" />
            </div>
            <p>Click to roll the dice</p>
        </DiceContainer>
    );
};

export default RoleDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
