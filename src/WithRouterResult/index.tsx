import React from 'react';

const WithRouterResult = () => {
    return <>
        <p>Redirected by using <code>withRouter</code> high-order component.</p>
        <p>Take a look at the component called <code>WithRouterAction</code> how to implement.</p>
        <p>You can get access to the history object's properties and the closest <code>{`<Route>`}</code>'s match via the <code>withRouter</code> higher-order component. <code>withRouter</code> will pass updated <code>match</code>, <code>location</code>, and <code>history</code> props to the wrapped component whenever it renders.</p>
    </>
}

export default WithRouterResult;