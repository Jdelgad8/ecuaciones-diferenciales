import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import acueducto from '../../../images/covers/acueducto.jpg';
import impacto from '../../../images/covers/impacto.jpg';
import recurso_suelo from '../../../images/covers/recurso-suelo.jpg';
import tecnologia from '../../../images/covers/tecnologia.jpg';
import CategoriesElement from '../components/categories-element';
import CategoriesLayout from '../components/categories-layout';
import CategoriesRow from '../components/categories-row';
import MainLayout from '../components/main-layout';
import Related from '../components/related';
import '../styles/link.css';

class Main extends Component {

  render() {
    return (
      <HandleError>
        <MainLayout>
          <Related />
          <CategoriesLayout>
            <VerticalLayout>
              <p className="subtittle">Bienvenido!</p>
              <p align="center">En esta página encontrarás las definiciones teóricas requeridas para</p>
              <p align="center">resolver de manera correcta las ecuaciones diferenciales en cada una</p>
              <p align="center">de las categorías. Así como también ejercicios resueltos que pueden </p>
              <p align="center">servir de guía para reforzar los conocimientos</p>
              <CategoriesRow>
                <Link to="/separables" className="link">
                  <CategoriesElement src={tecnologia}>
                    Ecuaciones de variables separables
                </CategoriesElement>
                </Link>
                <Link to="/exactas" className="link">
                  <CategoriesElement src={recurso_suelo}>
                    Ecuaciones diferenciales exactas
                </CategoriesElement>
                </Link>
              </CategoriesRow>
              <CategoriesRow>
                <Link to="/homogeneas" className="link">
                  <CategoriesElement src={acueducto}>
                    Ecuaciones diferenciales homogéneas
                </CategoriesElement>
                </Link>
                <Link to="/lineales" className="link">
                  <CategoriesElement src={impacto}>
                    Ecuaciones lineales de primer orden
                </CategoriesElement>
                </Link>
              </CategoriesRow>
            </VerticalLayout>

          </CategoriesLayout>
          <VerticalLayout>
          </VerticalLayout>
        </MainLayout>
      </HandleError>
    )
  }
}

export default Main;