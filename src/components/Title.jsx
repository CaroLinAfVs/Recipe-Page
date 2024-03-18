import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

function Title(props: Props){
    return (
        <h2 className="text-2xl text-orange-800 mb-3 font-serif">
            {props.children}
          </h2>
    )
}
export default Title