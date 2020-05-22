import React, { Component } from 'react';
import BottomButtons from '../../../common/components/bottom-buttons';
import Header from '../../../common/components/header';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import Homogeneas1 from '../../../images/ecuaciones/homogeneas/Homogeneas1.png';
import Homogeneas10 from '../../../images/ecuaciones/homogeneas/Homogeneas10.png';
import Homogeneas11 from '../../../images/ecuaciones/homogeneas/Homogeneas11.png';
import Homogeneas12 from '../../../images/ecuaciones/homogeneas/Homogeneas12.png';
import Homogeneas13 from '../../../images/ecuaciones/homogeneas/Homogeneas13.png';
import Homogeneas14 from '../../../images/ecuaciones/homogeneas/Homogeneas14.png';
import Homogeneas15 from '../../../images/ecuaciones/homogeneas/Homogeneas15.png';
import Homogeneas16 from '../../../images/ecuaciones/homogeneas/Homogeneas16.png';
import Homogeneas17 from '../../../images/ecuaciones/homogeneas/Homogeneas17.png';
import Homogeneas18 from '../../../images/ecuaciones/homogeneas/Homogeneas18.png';
import Homogeneas19 from '../../../images/ecuaciones/homogeneas/Homogeneas19.png';
import Homogeneas2 from '../../../images/ecuaciones/homogeneas/Homogeneas2.png';
import Homogeneas20 from '../../../images/ecuaciones/homogeneas/Homogeneas20.png';
import Homogeneas21 from '../../../images/ecuaciones/homogeneas/Homogeneas21.png';
import Homogeneas22 from '../../../images/ecuaciones/homogeneas/Homogeneas22.png';
import Homogeneas23 from '../../../images/ecuaciones/homogeneas/Homogeneas23.png';
import Homogeneas24 from '../../../images/ecuaciones/homogeneas/Homogeneas24.png';
import Homogeneas25 from '../../../images/ecuaciones/homogeneas/Homogeneas25.png';
import Homogeneas26 from '../../../images/ecuaciones/homogeneas/Homogeneas26.png';
import Homogeneas27 from '../../../images/ecuaciones/homogeneas/Homogeneas27.png';
import Homogeneas28 from '../../../images/ecuaciones/homogeneas/Homogeneas28.png';
import Homogeneas29 from '../../../images/ecuaciones/homogeneas/Homogeneas29.png';
import Homogeneas3 from '../../../images/ecuaciones/homogeneas/Homogeneas3.png';
import Homogeneas4 from '../../../images/ecuaciones/homogeneas/Homogeneas4.png';
import Homogeneas5 from '../../../images/ecuaciones/homogeneas/Homogeneas5.png';
import Homogeneas6 from '../../../images/ecuaciones/homogeneas/Homogeneas6.png';
import Homogeneas7 from '../../../images/ecuaciones/homogeneas/Homogeneas7.png';
import Homogeneas8 from '../../../images/ecuaciones/homogeneas/Homogeneas8.png';
import Homogeneas9 from '../../../images/ecuaciones/homogeneas/Homogeneas9.png';

class Acueductos extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HandleError>
        <VerticalLayout>
          <Header>
            Ecuaciones diferenciales homogéneas
          </Header>
          <BottomButtons />
          <div className="ecuaciones-body">
            <p className="lineales-text">Una ecuación diferencial ordinaria de primer orden, Y’ = F(x,y), es homogénea si </p>
            <p className="lineales-text">la función F(x,y) es homogénea de orden cero.</p>
            <h2 className="lineales-subtitle">NOTA</h2>
            <p className="lineales-text">si la ecuación diferencial está escrita en la forma:</p>
            <img src={Homogeneas1} height={40} alt={""} />
            <p className="lineales-text">sería homogénea sí y sólo sí los coeficientes M(x,y) y N(x,y) son funciones homogéneos del mismo grado.</p>
            <h2 className="lineales-subtitle">TEORIA</h2>
            <p className="lineales-text">Si la ecuación diferencial ordinaria de primer orden</p>
            <img src={Homogeneas2} height={35} alt={""} />
            <p className="lineales-text">es homogénea, entonces el cambio de variable y=ux la reduce a una ecuación diferencial en variables separadas.</p>
            <h2 className="lineales-subtitle">DEMOSTRACIÓN</h2>
            <p className="lineales-text">Al sustituir obtenemos</p>
            <img src={Homogeneas3} height={40} alt={""} />
            <p className="lineales-text">Como la función f(x,y) es homogénea de grado cero</p>
            <img src={Homogeneas4} height={60} alt={""} />
            <p className="lineales-text">concluimos que:</p>
            <img src={Homogeneas5} height={65} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas6} height={65} alt={""} />
            <img src={""} height={20} alt={""} />
            <h2 className="lineales-subtitle">EJEMPLO</h2>
            <img src={Homogeneas7} height={75} alt={""} />
            <p className="lineales-text">Organizamos la ecuación </p>
            <img src={Homogeneas8} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas9} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <p className="lineales-text">Comprobamos que la ecuación sea homogénea</p>
            <img src={Homogeneas10} height={50} alt={""} />
            <p className="lineales-text">Realizamos la diferenciación</p>
            <img src={Homogeneas11} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas12} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas13} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <p className="lineales-text">Elevamos a los exponentes</p>
            <img src={Homogeneas14} height={55} alt={""} />
            <p className="lineales-text">Realizamos la multiplicación </p>
            <img src={Homogeneas15} height={55} alt={""} />
            <p className="lineales-text">Simplificamos</p>
            <img src={Homogeneas16} height={45} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas17} height={45} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas18} height={70} alt={""} />
            <p className="lineales-text">Integramos</p>
            <img src={Homogeneas19} height={70} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas20} height={70} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas21} height={45} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas22} height={50} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas23} height={70} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas24} height={80} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas25} height={70} alt={""} />
            <img src={""} height={20} alt={""} />
            <p className="lineales-text">Ese resultado ya es válido, pero podemos seguir simplificando</p>
            <img src={Homogeneas26} height={80} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas27} height={50} alt={""} />
            <img src={""} height={30} alt={""} />
            <img src={Homogeneas28} height={45} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Homogeneas29} height={50} alt={""} />
          </div>
        </VerticalLayout>
        <BottomButtons />
      </HandleError>
    )
  }
}

export default Acueductos;