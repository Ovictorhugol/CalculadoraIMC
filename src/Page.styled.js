import styled from "styled-components";

export const Container = styled.div`
  width: 40vw;
  height: 55vh;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  font-weight: 300;
  @media (max-width: 768px) {
    min-width: 17rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 400;
`;
