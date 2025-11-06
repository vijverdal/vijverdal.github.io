import React from "react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";


interface Props {
  paginas: { label: string; url?: string; links?: {label: string; url: string}[] }[];
}

export function NavigationBar({ paginas }: Props) {


  return (
    <ThemeProvider>
      <Navbar paginas={paginas} />
    </ThemeProvider>
  );
}

export default NavigationBar;
