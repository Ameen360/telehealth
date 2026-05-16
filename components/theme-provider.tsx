"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export function ThemeProvider({ children, ...props }: any) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
