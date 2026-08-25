import type { PropsWithChildren } from "react"
import LenisProvider from "./LenisProvider";
import ScrollToHash from "@/hooks/HashScroll";

interface Props extends PropsWithChildren { }
export default function Providers({ children }: Props) {
    return (
        <LenisProvider>
            {children}
            <ScrollToHash />
        </LenisProvider>
    )
}
