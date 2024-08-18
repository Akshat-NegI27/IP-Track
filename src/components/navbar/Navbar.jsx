import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
<nav>
<h1>MINOR PROJECT</h1>
<div className="nav-part2">
<ul>
<li><Link id="link_Styles" to={"/"}> HOME </Link></li>
<li><Link id="link_Styles" to={"/About"}> ABOUT </Link></li>
<li><Link id="link_Styles" to={"/Legal"}> LEGAL </Link></li>
<li><Link id="link_Styles" to={"/IpTracker"}> IP TRACKER </Link></li>
<li><Link id="link_Styles" to={"/Contact"}> CONTACT </Link></li>
</ul>
</div>
<button>Let's Talk<svg viewBox="0 0 20 20">
          <path d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z">
          </path>
      </svg></button>
      <div id="nav-bottom"></div>
</nav>
    )
}
export default Navbar