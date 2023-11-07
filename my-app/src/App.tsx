/**
 * Main Application script
 */
import React, { FC, useEffect, useState } from 'react';

import './App.scss';
import { MyScheduler } from './my-scheduler';

const App: FC = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setCounter(count => count + 1), 3000);
        return () => clearInterval(interval);
      }, []);
    return <section>
        <h1>Scheduler app</h1>
        <MyScheduler />
        <footer>Counter: {counter}</footer>
    </section>;
};

// If you plan to use stateful React collections for data binding please check this guide
// https://bryntum.com/products/scheduler/docs/guide/Scheduler/integration/react/data-binding

export default App;
