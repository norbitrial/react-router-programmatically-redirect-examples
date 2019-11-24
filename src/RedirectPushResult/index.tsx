import React from 'react';

const RedirectPushResult = () => {
    return <>
        <p>Redirected by using <code>Redirect</code>.</p>
        <p>Take a look at the component called <code>RedirectPushAction</code> how to implement.</p>
        <p>Rendering a <code>{'<Redirect>'}</code> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.</p>
    </>
}

export default RedirectPushResult;