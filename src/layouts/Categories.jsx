import React from 'react';
import {Dropdown} from 'react-bootstrap';
import '../App.css';
export default function Categories() {
  return <div className='Deneme'>
    <Dropdown.Menu show >
    
  <Dropdown.Item >KATEGORİLER</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item >Action</Dropdown.Item>
  <Dropdown.Item >Another action</Dropdown.Item>
  <Dropdown.Item >Something else here</Dropdown.Item>
</Dropdown.Menu>
  </div>;
}
