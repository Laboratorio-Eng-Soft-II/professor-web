import styled from "styled-components";
import { Spacing } from "../../../theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: ${Spacing.Medium};
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
  gap: ${Spacing.Medium};
  flex-wrap: wrap;
`;
