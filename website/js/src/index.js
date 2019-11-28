
import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom'
import { destComponent } from './testComponent.jsx'
import TestComponent from './testComponent.jsx'

ReactDom.render(
<TestComponent/>,
document.getElementById('root')
);

// <TestComponent>Hello, test!</TestComponent>,
// <a>Hello, world!</a>,

