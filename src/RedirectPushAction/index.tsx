import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router';

const RedirectPushAction = () => {
    const [redirect, setRedirect] = useState(false);
    const handleRedirect = useCallback(() => {
        let render = null;
        if (redirect) {
            render = <Redirect to="/redirectpush" push={true} />
            
            // in order wait until commiting to the DOM
            // and get back the button for clicking next time
            setTimeout(() => setRedirect(false), 0);
        }
        return render;
    }, [redirect]);

    return <>
        {handleRedirect()}
        <button onClick={() => setRedirect(true)}>
            Redirect push
        </button>
    </>
}

export default RedirectPushAction;