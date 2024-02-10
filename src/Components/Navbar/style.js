import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: sticky-top;
  background-color: transparent;
  width: 100%;
  height: 8vh;
  z-index: 99;
`;

export const Comporter = styled.div`
  display: flex;
  width: 100%;

`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 0 auto;
    align-items: center;
`

export const Link = styled.p`
    padding; 10px;
    color: white;
    font-size: 15px;
    font-weight: 600;
    margin: 0 auto;
    transition: all 0.4s;

    &:hover {
        cursor: pointer;
        color: var(--main-purple);
        transform: scale(1.15);
    }
`

