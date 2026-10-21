import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Hello from a minimal React app!</h1>;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
