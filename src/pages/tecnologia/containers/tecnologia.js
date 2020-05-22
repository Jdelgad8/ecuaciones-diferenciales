import React, { Component } from 'react';
import BottomButtons from '../../../common/components/bottom-buttons';
import Header from '../../../common/components/header';
import VerticalLayout from '../../../common/components/vertical-layout';
import '../../../common/styles/ecuaciones-body.css';
import HandleError from '../../../error/containers/handle-error';
import Separables1 from '../../../images/ecuaciones/separables/separables1.png';
import Separables10 from '../../../images/ecuaciones/separables/separables10.png';
import Separables11 from '../../../images/ecuaciones/separables/separables11.png';
import Separables12 from '../../../images/ecuaciones/separables/separables12.png';
import Separables13 from '../../../images/ecuaciones/separables/separables13.png';
import Separables14 from '../../../images/ecuaciones/separables/separables14.png';
import Separables15 from '../../../images/ecuaciones/separables/separables15.png';
import Separables2 from '../../../images/ecuaciones/separables/separables2.png';
import Separables3 from '../../../images/ecuaciones/separables/separables3.png';
import Separables4 from '../../../images/ecuaciones/separables/separables4.png';
import Separables5 from '../../../images/ecuaciones/separables/separables5.png';
import Separables6 from '../../../images/ecuaciones/separables/separables6.png';
import Separables7 from '../../../images/ecuaciones/separables/separables7.png';
import Separables8 from '../../../images/ecuaciones/separables/separables8.png';
import Separables9 from '../../../images/ecuaciones/separables/separables9.png';

class Tecnologia extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HandleError>
        <VerticalLayout>
          <Header>
            Ecuaciones de variables separables
          </Header>
          <BottomButtons />
          <div className="ecuaciones-body">
            <p className="lineales-text">Una ecuación diferencial ordinaria de primer orden f(x,y,y')=0 que puede escribirse en la forma:</p>
            <img src={Separables1} height={40} alt={""} />
            <p className="lineales-text">Se llama ecuación diferencial en variables separadas.</p>
            <h2 className="lineales-subtitle">NOTA: </h2>
            <p className="lineales-text">Una ecuación de la forma:</p>
            <img src={Separables2} height={45} alt={""} />
            <p className="lineales-text">puede transformarse en una ecuación en variables separadas al dividir por el factor f2(x)g1(y)</p>
            <img src={Separables3} height={65} alt={""} />
            <p className="lineales-text">Y al integrar obtenemos la solución </p>
            <img src={Separables4} height={65} alt={""} />
            <p className="lineales-text">Tenga presente que al dividir por el factor f2(x)g1(y) puede perder </p>
            <p className="lineales-text">soluciones que anulan este factor, las cuales pueden ser soluciones singulares</p>
            <h2 className="lineales-subtitle">EJEMPLO:</h2>
            <img src={Separables5} height={45} alt={""} />
            <p className="lineales-text">Primero organizamos la ecuación </p>
            <img src={Separables6} height={70} alt={""} />
            <p className="lineales-text">Separamos</p>
            <img src={Separables7} height={55} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Separables8} height={80} alt={""} />
            <p className="lineales-text">Integramos</p>
            <img src={Separables9} height={70} alt={""} />
            <img src={Separables10} height={60} alt={""} />
            <p className="lineales-text">Despejamos (y)</p>
            <img src={Separables11} height={300} alt={""} />
            <p className="lineales-text">Comprobamos</p>
            <img src={Separables12} height={60} alt={""} />
            <p className="lineales-text">Obtuvimos</p>
            <img src={Separables13} height={60} alt={""} />
            <p className="lineales-text">Derivamos </p>
            <img src={Separables14} height={60} alt={""} />
            <p className="lineales-text">Sustituimos</p>
            <img src={Separables15} height={60} alt={""} />
          </div>
        </VerticalLayout>
        <BottomButtons />
      </HandleError>
    )
  }
}

export default Tecnologia;