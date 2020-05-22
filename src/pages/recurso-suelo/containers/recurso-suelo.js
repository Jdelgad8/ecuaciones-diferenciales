import React, { Component } from 'react';
import BottomButtons from '../../../common/components/bottom-buttons';
import Header from '../../../common/components/header';
//components
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import Exactas1 from '../../../images/ecuaciones/exactas/exactas1.png';
import Exactas10 from '../../../images/ecuaciones/exactas/exactas10.png';
import Exactas11 from '../../../images/ecuaciones/exactas/exactas11.png';
import Exactas12 from '../../../images/ecuaciones/exactas/exactas12.png';
import Exactas13 from '../../../images/ecuaciones/exactas/exactas13.png';
import Exactas14 from '../../../images/ecuaciones/exactas/exactas14.png';
import Exactas15 from '../../../images/ecuaciones/exactas/exactas15.png';
import Exactas16 from '../../../images/ecuaciones/exactas/exactas16.png';
import Exactas17 from '../../../images/ecuaciones/exactas/exactas17.png';
import Exactas18 from '../../../images/ecuaciones/exactas/exactas18.png';
import Exactas19 from '../../../images/ecuaciones/exactas/exactas19.png';
import Exactas2 from '../../../images/ecuaciones/exactas/exactas2.png';
import Exactas20 from '../../../images/ecuaciones/exactas/exactas20.png';
import Exactas21 from '../../../images/ecuaciones/exactas/exactas21.png';
import Exactas22 from '../../../images/ecuaciones/exactas/exactas22.png';
import Exactas23 from '../../../images/ecuaciones/exactas/exactas23.png';
import Exactas3 from '../../../images/ecuaciones/exactas/exactas3.png';
import Exactas4 from '../../../images/ecuaciones/exactas/exactas4.png';
import Exactas5 from '../../../images/ecuaciones/exactas/exactas5.png';
import Exactas6 from '../../../images/ecuaciones/exactas/exactas6.png';
import Exactas7 from '../../../images/ecuaciones/exactas/exactas7.png';
import Exactas8 from '../../../images/ecuaciones/exactas/exactas8.png';
import Exactas9 from '../../../images/ecuaciones/exactas/exactas9.png';

class RecursoSuelo extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HandleError>
        <VerticalLayout>
          <Header>
            Ecuaciones diferenciales exactas
          </Header>
          <BottomButtons />
          <div className="ecuaciones-body">
            <p className="lineales-text">Una ecuación diferencial exacta es de la forma </p>
            <img src={Exactas1} height={25} alt={""} />
            <h2 className="lineales-subtitle">EJEMPLO</h2>
            <img src={Exactas2} height={25} alt={""} />
            <p className="lineales-text">En este caso tenemos </p>
            <img src={Exactas3} height={25} alt={""} />
            <img src={""} height={25} alt={""} />
            <img src={Exactas4} height={25} alt={""} />
            <p className="lineales-text">El primer paso para resolver una ecuación diferencial exacta es comprobar si</p>
            <p className="lineales-text">la ecuación dada cumple la siguiente igualdad</p>
            <img src={Exactas5} height={55} alt={""} />
            <p className="lineales-text">Entonces</p>
            <img src={Exactas6} height={50} alt={""} />
            <p className="lineales-text">Vemos que la igualdad se cumple, por lo tanto, ya estamos seguros de que</p>
            <p className="lineales-text">la ecuación diferencial dada es exacta.</p>
            <img src={Exactas7} height={30} alt={""} />
            <p className="lineales-text">El segundo paso es integrar usando una de estas 2 opciones</p>
            <img src={Exactas8} height={50} alt={""} />
            <img src={Exactas9} height={50} alt={""} />
            <p className="lineales-text">Y como no sabemos quien es g derivamos la función obtenida según</p>
            <p className="lineales-text">la variable. Fy para G(y) o Fx para G(x)</p>
            <img src={Exactas10} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas11} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas12} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas13} height={33} alt={""} />
            <img src={""} height={20} alt={""} />
            <p className="lineales-text">Derivamos con respecto a y</p>
            <img src={Exactas14} height={45} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas15} height={40} alt={""} />
            <p className="lineales-text">Y despejamos g’(y)</p>
            <img src={Exactas16} height={40} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas17} height={30} alt={""} />
            <p className="lineales-text">Ahora integramos g’(y) para obtener g(y)</p>
            <img src={Exactas19} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas18} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas20} height={60} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas21} height={30} alt={""} />
            <img src={""} height={20} alt={""} />
            <p className="lineales-text">Por último, reemplazamos g(y) en la opción de integración que utilizamos en el segundo paso</p>
            <img src={Exactas22} height={35} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Exactas23} height={40} alt={""} />
          </div>
        </VerticalLayout>
        <BottomButtons />
      </HandleError>
    )
  }
}

export default RecursoSuelo;