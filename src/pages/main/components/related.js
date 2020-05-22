import React from 'react';
import WhiteTitle from '../../../common/components/white-title';
import WhiteTitleYear from '../../../common/components/white-title-year';
import logo from '../../../images/ucc-logo.png';
import '../styles/related.css';

function Related(props) {
  return (
    <div className="Related">
      <WhiteTitle>Ecuaciones diferenciales</WhiteTitle>
      <div>
        <div className="Related-image">
          <img src={logo} width={100} height={100} alt={""} />
        </div>
        <WhiteTitleYear>2020</WhiteTitleYear>
      </div>
    </div>
  )
}

export default Related;