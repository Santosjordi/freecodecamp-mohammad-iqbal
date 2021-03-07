//Our root component, we will simply import and display our context_state_config.js component

import React from "react";
import ContextState from './context_state_config';

const App = () => {
    return(
        <div>
            React
            <ContextState />
        </div>
    )
}

export default App;
