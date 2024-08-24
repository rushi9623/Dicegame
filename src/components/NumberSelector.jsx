import React from 'react';
import styled from 'styled-components';

const NumberSelector = ({ error, selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    return (
        <NumberSelectorContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className='Flex'>
                {arrNumber.map((value, i) => (
                    <Box 
                        key={i}
                        onClick={() => setSelectedNumber(value)} 
                        isSelected={selectedNumber === value}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .Flex {
        display: flex;
        gap: 24px;
    }
    p {
        font-size: 24px;
        font-weight: 700;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 18px;
    margin-bottom: 10px;
`;

export default NumberSelector;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${({ isSelected }) => (isSelected ? 'lightblue' : 'white')};

    &:hover {
        background-color: lightgray;
    }
`;
