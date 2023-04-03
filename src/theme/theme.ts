export const Colors = {
  background: "#083D77",
  primary: "#EBEBD3",
  secondary: "#061B55",
  callToAction: "#ff8811",
  black: "#222222",
  grayLight: "#DDDEDF",
  gray: "#B9BBBC",
};

export enum Spacing {
  XSmall = "4px",
  Small = "8px",
  Medium = "14px",
  Large = "20px",
  XLarge = "28px",
}

export const BreakPoints = {};

export enum FontFamily {
  PRIMARY = "Open Sans",
}

export const FontSize = {
  xsm: "14px",
  sm: "16px",
  md: "18px",
  lg: "20px",
  xlg: "28px",
};

export enum FontWeight {
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
}

export const Border = {
  Radius: "8px",
  Width: "1px",
  Color: Colors.black,
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
