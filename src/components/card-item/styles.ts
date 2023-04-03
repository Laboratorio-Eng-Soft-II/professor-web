import styled from "styled-components";
import { Colors, Spacing } from "../../theme";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${Colors.secondary};
  padding: ${Spacing.Medium};

  min-width: 150px;
  min-height: 150px;
  max-width: 150px;
  max-height: 150px;

  cursor: pointer;

  :hover {
    box-shadow: 0 0 11px rgba(180, 180, 180, 0.3);
  }

  transition: box-shadow 0.3s;
`;
