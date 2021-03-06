//Will hold the Context object and will be imported to every component that uses the useContext() hook

import React from 'react';

const Context = React.createContext()

export default Context;

//We have to initialize our Context object