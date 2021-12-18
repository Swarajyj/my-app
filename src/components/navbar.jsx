// import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a classname="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;

//Stateless functional Component
//props desctructuring
//Also no life cycle hoosks
import Cart from "./cart";
const NavBar = ({ totalCounters }) => {
  console.log("Navbar  - render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="test">
        <span className="display-3">Shopping Cart</span> <Cart />
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
