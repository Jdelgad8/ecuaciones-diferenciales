import React from 'react';
import BlackTitle from '../../../common/components/black-title';
import Image from '../../../common/components/image';
import '../styles/categories-element.css';

function CategoriesElement(props) {

  return (
    <div className="categories-element">
      <BlackTitle>{props.children}</BlackTitle>
      <Image
        src={props.src}
        width={240}
        height={160}
      />
    </div>
  )
}


export default CategoriesElement;