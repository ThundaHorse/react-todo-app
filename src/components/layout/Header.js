import React from 'react';

export default function Header() {
  return (
    <header>
      <h1 style={headStyle}>To-do list</h1>
    </header>
  );
}

const headStyle = {
  textAlign: 'center',
  marginTop: '10px',
  padding: '10px',
  background: '#94D5EF',
  borderRadius: '5px'
};
