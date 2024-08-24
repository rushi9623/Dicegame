import styled from "styled-components";

// Define the Container styled component using template literals
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Startgame = ({ toggle }) => {
  return ( 
    <Container>
      <div>
        <img src="/img/dices 1.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <button>Play Now</button>
      </div>
    </Container> 
  );
}

export default Startgame;
