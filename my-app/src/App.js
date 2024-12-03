import React, { useState } from 'react';
import './index.css'; 
import Navbar from './component/navbar/Navbar';
import Contact from './component/contactpage/Contact';
import Home from './component/Homepage/Home';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );
}

export default App;