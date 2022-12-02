interface IMargin {
  [key: string]: {
    lg: string;
    md?: string;
    sm: string;
  };
}

export const Margin: IMargin = {
  Level_1: {
    lg: "64px",
    md: "56px",
    sm: "48px",
  },
  Level_2: {
    lg: "56px",
    md: "48px",
    sm: "40px",
  },
  Level_3: {
    lg: "48px",
    md: "48px",
    sm: "40px",
  },
  Level_4: {
    lg: "40px",
    md: "40px",
    sm: "32px",
  },
  Level_5: {
    lg: "32px",
    md: "32px",
    sm: "24px",
  },
  Level_6: {
    lg: "24px",
    md: "24px",
    sm: "20px",
  },
  Level_7: {
    lg: "20px",
    md: "20px",
    sm: "16px",
  },
  Level_8: {
    lg: "16x",
    md: "16px",
    sm: "16px",
  },
  Level_9: {
    lg: "8x",
    md: "8px",
    sm: "8px",
  },
};
