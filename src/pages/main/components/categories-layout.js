import React from 'react';
import '../styles/categories-layout.css';

function CategoriesLayout(props) {
  return (
    <div className="categories-layout">
      {props.children}
    </div>
  )
}

export default CategoriesLayout;