import React from 'react';
import { render} from 'react-dom';
import MyComponent from '../entry';
const App = () => (
 <MyComponent />
);
render(<App />, document.getElementById("root"));