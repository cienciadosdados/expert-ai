"use client";

import React from "react"
import { ThemeProvider } from "next-themes"

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default Providers