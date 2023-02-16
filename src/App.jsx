import React, {useState, useEffect, CSSProperties } from 'react';

import MoonLoader  from "react-spinners/MoonLoader";


export const App = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 1500)
    },[])

    const style_loader: React.CSSProperties = {
        display: "block",
        margin: "300px auto",
    };

    return (
        <>
            {
                loading ? <MoonLoader 
                    color="#5A5A5A"
                    loading={loading}
                    size={50}
                    cssOverride={style_loader}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> 

                :

                <h1>Hello World</h1>
            }
        </>
    )
}