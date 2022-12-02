interface IMargin {
  [key: number]: {
    lg: string;
    md?: string;
    sm: string;
  };
}

export const Margin: IMargin = {
  1: {
    lg: "64px",
    md: "56px",
    sm: "48px",
  },
  2: {
    lg: "56px",
    md: "48px",
    sm: "40px",
  },
  3: {
    lg: "48px",
    md: "48px",
    sm: "40px",
  },
  4: {
    lg: "40px",
    md: "40px",
    sm: "32px",
  },
  5: {
    lg: "32px",
    md: "32px",
    sm: "24px",
  },
  6: {
    lg: "24px",
    md: "24px",
    sm: "20px",
  },
  7: {
    lg: "20px",
    md: "20px",
    sm: "16px",
  },
  8: {
    lg: "16x",
    md: "16px",
    sm: "16px",
  },
  9: {
    lg: "8x",
    md: "8px",
    sm: "8px",
  },
};
