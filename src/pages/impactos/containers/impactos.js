import React, { Component } from 'react';
import BottomButtons from '../../../common/components/bottom-buttons';
import Header from '../../../common/components/header';
import VerticalLayout from '../../../common/components/vertical-layout';
import '../../../common/styles/ecuaciones-body.css';
import HandleError from '../../../error/containers/handle-error';
import Lineales1 from '../../../images/ecuaciones/lineales/Lineales1.png';
import Lineales10 from '../../../images/ecuaciones/lineales/lineales10.png';
import Lineales11 from '../../../images/ecuaciones/lineales/lineales11.png';
import Lineales12 from '../../../images/ecuaciones/lineales/lineales12.png';
import Lineales13 from '../../../images/ecuaciones/lineales/lineales13.png';
import Lineales14 from '../../../images/ecuaciones/lineales/lineales14.png';
import Lineales15 from '../../../images/ecuaciones/lineales/lineales15.png';
import Lineales16 from '../../../images/ecuaciones/lineales/lineales16.png';
import Lineales17 from '../../../images/ecuaciones/lineales/lineales17.png';
import Lineales18 from '../../../images/ecuaciones/lineales/lineales18.png';
import Lineales19 from '../../../images/ecuaciones/lineales/lineales19.png';
import Lineales2 from '../../../images/ecuaciones/lineales/lineales2.png';
import Lineales20 from '../../../images/ecuaciones/lineales/lineales20.png';
import Lineales21 from '../../../images/ecuaciones/lineales/lineales21.png';
import Lineales22 from '../../../images/ecuaciones/lineales/lineales22.png';
import Lineales23 from '../../../images/ecuaciones/lineales/lineales23.png';
import Lineales24 from '../../../images/ecuaciones/lineales/lineales24.png';
import Lineales25 from '../../../images/ecuaciones/lineales/lineales25.png';
import Lineales26 from '../../../images/ecuaciones/lineales/lineales26.png';
import Lineales27 from '../../../images/ecuaciones/lineales/lineales27.png';
import Lineales28 from '../../../images/ecuaciones/lineales/lineales28.png';
import Lineales29 from '../../../images/ecuaciones/lineales/lineales29.png';
import Lineales3 from '../../../images/ecuaciones/lineales/lineales3.png';
import Lineales30 from '../../../images/ecuaciones/lineales/lineales30.png';
import Lineales31 from '../../../images/ecuaciones/lineales/lineales31.png';
import Lineales32 from '../../../images/ecuaciones/lineales/lineales32.png';
import Lineales4 from '../../../images/ecuaciones/lineales/lineales4.png';
import Lineales5 from '../../../images/ecuaciones/lineales/lineales5.png';
import Lineales6 from '../../../images/ecuaciones/lineales/lineales6.png';
import Lineales7 from '../../../images/ecuaciones/lineales/lineales7.png';
import Lineales8 from '../../../images/ecuaciones/lineales/lineales8.png';
import Lineales9 from '../../../images/ecuaciones/lineales/lineales9.png';




class Impactos extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HandleError>
        <VerticalLayout>
          <Header>
            Ecuaciones diferenciales lineales de primer orden
          </Header>
          <BottomButtons />
          <div className="ecuaciones-body">
            <p className="lineales-text">Una ecuación diferencial de primer orden que puede escribirse en la forma</p>
            <img src={Lineales1} height={60} alt={""} />
            <p className="lineales-text">Donde P(X) Y Q(x) son funciones reales</p>
            <h2 className="lineales-subtitle">NOTA</h2>
            <p className="lineales-text">Una ecuación diferencial lineal de orden N tiene la forma</p>
            <img src={Lineales2} height={50} alt={""} />
            <p className="lineales-text">donde los coeficientes</p>
            <img src={Lineales3} height={35} alt={""} />
            <p className="lineales-text">son funcionales reales y </p>
            <img src={Lineales4} height={35} alt={""} />
            <p className="lineales-text">De forma que cuando tenemos n = 1</p>
            <img src={Lineales5} height={45} alt={""} />

            <p className="lineales-text">Y al dividir por </p>
            <img src={Lineales6} height={45} alt={""} />


            <p className="lineales-text">Tenemos</p>
            <img src={Lineales7} height={70} alt={""} />
            <p className="lineales-text">La cual tiene la forma </p>
            <img src={Lineales8} height={45} alt={""} />
            <p className="lineales-text">donde:</p>
            <img src={Lineales9} height={70} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Lineales10} height={70} alt={""} />
            <img src={""} height={20} alt={""} />
            <h2 className="lineales-subtitle">TEORIA</h2>
            <p className="lineales-text">La solución general de la ecuación diferencial de primer orden</p>
            <img src={Lineales11} height={65} alt={""} />
            <p className="lineales-text">está dada por</p>
            <img src={Lineales12} height={55} alt={""} />
            <img src={""} height={20} alt={""} />
            <h2 className="lineales-subtitle">DEMOSTRACIÓN</h2>
            <img src={Lineales13} height={55} alt={""} />

            <p className="lineales-text">Se comprueba que </p>
            <img src={Lineales14} height={65} alt={""} />
            <p className="lineales-text">es un factor integrante.</p>

            <img src={Lineales15} height={65} alt={""} />
            <p className="lineales-text">Se obtiene</p>
            <img src={Lineales16} height={75} alt={""} />
            <p className="lineales-text">Se integra con respecto a x</p>
            <img src={Lineales17} height={70} alt={""} />
            <img src={""} height={20} alt={""} />
            <h2 className="lineales-subtitle">EJEMPLO</h2>
            <img src={Lineales18} height={65} alt={""} />
            <p className="lineales-text">Analizamos la forma general</p>
            <img src={Lineales19} height={50} alt={""} />
            <p className="lineales-text">Y reemplazamos</p>
            <img src={Lineales20} height={95} alt={""} />
            <p className="lineales-text">Cancelamos las x</p>
            <img src={Lineales21} height={85} alt={""} />
            <p className="lineales-text">Identificamos la ecuación</p>
            <img src={Lineales22} height={60} alt={""} />
            <p className="lineales-text">Utilizamos la formula para resolver la ecuación</p>
            <img src={Lineales23} height={85} alt={""} />
            <p className="lineales-text">Reemplazamos con nuestra ecuación </p>
            <img src={Lineales24} height={85} alt={""} />
            <p className="lineales-text">Resolvemos la integral </p>
            <img src={Lineales25} height={75} alt={""} />
            <img src={Lineales26} height={62} alt={""} />
            <img src={Lineales27} height={60} alt={""} />
            <img src={""} height={20} alt={""} />
            <img src={Lineales28} height={40} alt={""} />
            <p className="lineales-text">Una vez encontramos el resultado, aplicamos a la formula general</p>
            <img src={Lineales29} height={75} alt={""} />
            <p className="lineales-text">Reemplazamos</p>
            <img src={Lineales30} height={80} alt={""} />
            <p className="lineales-text">Resolvemos la integral</p>
            <img src={Lineales31} height={70} alt={""} />
            <p className="lineales-text">Como resultado final de nuestra ecuación obtenemos</p>
            <img src={Lineales32} height={70} alt={""} />
          </div>
          <BottomButtons />
        </VerticalLayout>
      </HandleError>

    )
  }
}

export default Impactos;