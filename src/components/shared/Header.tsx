
import React from "react";


const Header = ({ title, subtitle }: {title: string,
    subtitle: string}) => {
    return (
       <>
        <h2 className="font-bold text-3xl text-blue-700">{title}</h2>
        {subtitle && <p className="font-semibold mt-4 text-blue-500">{subtitle}</p>}
       </>
    )
}
export default Header