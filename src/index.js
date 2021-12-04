import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context'
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="093f5444-2cd4-4ceb-8f84-e06c380a39a4" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
 document.getElementById('root'));