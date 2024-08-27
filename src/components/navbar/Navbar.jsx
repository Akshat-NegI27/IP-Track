import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
<nav>
<h1>MINOR PR</h1>
<div className="nav-part2">
<ul>
<li><Link id="link_Styles" to={"/"}> HOME </Link></li>
<li><Link id="link_Styles" to={"/IpTracker"}> IP TRACKER </Link></li>
<li><Link id="link_Styles" to={"/About"}> ABOUT </Link></li>
<li><Link id="link_Styles" to={"/Legal"}> LEGAL </Link></li>
<li><Link id="link_Styles" to={"/Contact"}> CONTACT </Link></li>
</ul>
</div>
<div className="sidebar">
<ul>
<li><Link id="link_Styles" to={"/"}> HOME </Link></li>
<li><Link id="link_Styles" to={"/IpTracker"}> IP TRACKER </Link></li>
<li><Link id="link_Styles" to={"/About"}> ABOUT </Link></li>
<li><Link id="link_Styles" to={"/Legal"}> LEGAL </Link></li>
<li><Link id="link_Styles" to={"/Contact"}> CONTACT </Link></li>
</ul>
</div>
<button onClick={showSidebar}>Menu<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
</button>
      <div id="nav-bottom"></div>
</nav>
    )
}
export default Navbar



function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
