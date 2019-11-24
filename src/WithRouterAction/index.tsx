import React from 'react';
import { withRouter } from 'react-router';

const WithRouterAction = (props:any) => {
    const { history } = props;

    return <button onClick={() => { history.push('/withrouter') }}>
        withRouter redirect
    </button>
}

export default withRouter(WithRouterAction);