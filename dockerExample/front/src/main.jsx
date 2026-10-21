import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Counter from './counter.jsx';


const root = createRoot(document.getElementById('root'));
root.render(<Counter />);
