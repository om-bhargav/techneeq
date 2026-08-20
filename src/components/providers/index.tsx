import type { PropsWithChildren } from "react"
import LenisProvider from "./LenisProvider";
interface Props extends PropsWithChildren { }
export default function Providers({ children }: Props) {
    return (
        <LenisProvider>
            {children}
        </LenisProvider>
    )
}
