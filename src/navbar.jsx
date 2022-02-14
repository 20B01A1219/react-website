import React from "react";
import "./styles.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="nav-brand">
        <img src="https://img.icons8.com/offices/30/000000/react.png"/><span id = "brand">React</span>
        </li>
        <li className="link1" ><a href="https://reactjs.org/docs/getting-started.html" id = "first">Docs</a></li>
             <li className="link"><a href="https://reactjs.org/tutorial/tutorial.html" className= "anchors">Tutorial</a></li>
             <li className="link"><a href="https://reactjs.org/blog/2021/12/17/react-conf-2021-recap.html" className= "anchors">Blog</a></li>
             <li className="link"><a href="https://reactjs.org/community/support.html" className= "anchors">Community</a></li>
             <li><input type="text"  placeholder="Search"/></li>
             <li className="link"><a href = "https://reactjs.org/versions" className= "anchors">V17.0.2</a></li>
             <li className="link"><a href = "https://reactjs.org/languages" className= "anchors">Languages</a></li>
             <li className="link"><a href = "https://github.com/facebook/react/" className= "anchors">Github<img src="https://img.icons8.com/color/30/000000/external-link.png"/></a></li>
      </ul>
     
    </div>
  );
}
export default Navbar;
