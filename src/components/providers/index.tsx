import type { PropsWithChildren } from "react"
import LenisProvider from "./LenisProvider";
// import WaterBackground from "./WaterBackground";
interface Props extends PropsWithChildren { }
export default function Providers({ children }: Props) {
    return (
        <LenisProvider>
            {/* <WaterBackground> */}
                {children}
            {/* </WaterBackground> */}

        </LenisProvider>
    )
}
