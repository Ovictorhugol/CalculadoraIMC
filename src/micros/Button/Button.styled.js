import styled from "styled-components";

export const ButtonBody = styled.button`
  border: none;
  background: #f7b718;
  color: #ffffff;
  width: 16rem;
  font-weight: 300;
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  height: 3rem;
  border-radius: 4px;
  :hover {
    background: #ffd46a;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    max-width: 11rem;
  }
`;
