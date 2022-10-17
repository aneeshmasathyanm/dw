
import React from 'react'
import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';
import './App.css';
import Dashbox from './components/pages/dashbox/dashbo';

function App()
{
  return (
  <div>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Dashbox/>
    </div>
  </div>
  );
}
export default App;
