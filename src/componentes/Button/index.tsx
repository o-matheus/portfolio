import type { ReactNode } from "react";
import { Btn } from "./styles";

type PropsButton = {
    children: ReactNode
    color: 'primario' | 'secundaria' | 'terciario'
    size: 'medio' | 'pequeno'
}

const Button = ({children, color, size}: PropsButton) => {

    return(
        <Btn color={color} size={size}>{children}</Btn>
    )
}

export default Button;