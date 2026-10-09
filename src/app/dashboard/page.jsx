import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {
    console.log('dashboard page render')
    return (
        <div>
            <h2>Dashboard pages</h2>
              <Counter></Counter>
            <ul>
                <li>Page-1</li>
                <li>page-2</li>
                <li>page-3</li>
            </ul>

        </div>
    );
};

export default DashboardPage;