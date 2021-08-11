import '../styles/globals.css'
import Theme from "../styles/Theme";
import React from "react";

function MyApp({Component, pageProps}) {
    return (
        <Theme>
            <Component {...pageProps} />
        </Theme>
    )

}

export default MyApp
