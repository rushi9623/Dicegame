import styled from "styled-components";

const Totalscore = ({ score }) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    );
};

export default Totalscore;

const ScoreContainer = styled.div`
    max-width: 100px;
    text-align: center;

    h1 {
        font-size: 100px;
    }
    p {
        font-size: 24px;
        font-weight: 500;
    }
`;
