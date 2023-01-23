import { Theme } from "@emotion/react";
import { createContext } from "react";
import { typeTheme as TypeTheme } from "./UIProvider";

interface ContextProps {
  themeSelected: TypeTheme;
  currentTheme: Theme;
  //function
  changeTheme: (themeName:  TypeTheme) => void;
}

export const UIContext = createContext({} as ContextProps);