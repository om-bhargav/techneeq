import type { PropsWithChildren } from "react"
import LenisProvider from "./LenisProvider";
import ScrollToHash from "@/hooks/HashScroll";
import React from "react";
import CustomCursor from "./CursorProvider";

interface Props extends PropsWithChildren { }
export default function Providers({ children }: Props) {
    return (
        <React.Fragment>
            {children}
            <CustomCursor/>
            <LenisProvider/>
            <ScrollToHash />
        </React.Fragment>
    )
}
