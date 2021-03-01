import React from 'react';

import './style.scss';
import Logo from '@/assets/logo.svg';

const App: React.FC = () => (
  <div className="App">
    <Logo className="logo" />
    <p className="message">
      Create your React app with React Typescript Boilerplate
    </p>
  </div>
);

export default App;