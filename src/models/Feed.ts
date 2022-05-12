import { createContext } from "react";

export interface ITheme {
    name: string;
    color: string;
    background: string;
    toggleTheme(): void;
  }
  
  interface IThemes {
    feed: ITheme;
    fed: ITheme;
  }

  export const themes: IThemes = {
    feed: {
      name: "FEED",
      color: "black",
      background: "white",
      toggleTheme: () => {},
    },
    fed: {
      name: "FED",
      color: "black",
      background: "white",
      toggleTheme: () => {},
    },
  };
  
  export const ThemeContext = createContext(themes.feed);