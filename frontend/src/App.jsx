import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import CollapsedNavbar from './Components/CollapsedNavbar';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="App">
      <div className="sidebar">
        {collapsed ? (
          <div className='uncollapsed'>
            <CollapsedNavbar/>
            <div className="collapser" onClick={handleCollapseToggle}>
              <IconChevronRight size={16}/>
            </div>
          </div>
        ) : (
          <div className='uncollapsed'>
            <Navbar />
            <div className="collapser" onClick={handleCollapseToggle}>
              <IconChevronLeft size={16}/>
            </div>
          </div>)}
      </div>
    </div>
  );
}

export default App;
