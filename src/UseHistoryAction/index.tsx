import React from 'react';
import { useHistory } from 'react-router';

const UseHistoryAction = () => {
    let history = useHistory();

    return <button onClick={() => { history.push('/usehistory') }}>
        useHistory redirect
    </button>
}

export default UseHistoryAction;