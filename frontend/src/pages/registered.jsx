import React, { useEffect } from 'react'

export default function registered({
    history
}) {
    useEffect( () => {
        setTimeout(async function() {
            history.push("/dashboard")
        }, 5000)
    })
 
    return (
        <div>
            <h1>Success Fully registered, redirected in ..</h1>
        </div>
    );
};