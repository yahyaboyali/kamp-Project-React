import React from 'react';
import {NavDropdown} from 'react-bootstrap';
export default function CartSummary() {
  return <div>

    <NavDropdown  title="sepetiniz" id="navbarScrollingDropdown">
      <NavDropdown.Item >Action</NavDropdown.Item>
      <NavDropdown.Item >Another action</NavDropdown.Item>
    </NavDropdown>
  </div>;
}
