import logoPoli from "../../assets/LogoEPUSP.png";
import { Body, H1, H3, Spacing } from "../../theme";
import { Separator } from "../box";

interface HeaderProps {
  title?: string;
  body?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, body }) => {
  return (
    <>
      <img
        width="100px"
        height="100px"
        src={logoPoli}
        alt="logo da Poli"
        style={{ justifyContent: "center" }}
      ></img>
      <H1 textAlign="center">Internship 4.0 - Portal de estágios</H1>
      <Separator size={Spacing.XSmall} />

      {title && (
        <>
          <H3 textAlign="center">{title}</H3>
          <Separator size={Spacing.XSmall} />
        </>
      )}
      {body && (
        <>
          <Body textAlign="center">{body}</Body>
          <Separator size={Spacing.XSmall} />
        </>
      )}
    </>
  );
};
