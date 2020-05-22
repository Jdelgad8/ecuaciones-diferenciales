import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Acueductos from './pages/acueductos/containers/acueductos';
import Impactos from './pages/impactos/containers/impactos';
import Main from './pages/main/containers/main';
import RecursoSuelo from './pages/recurso-suelo/containers/recurso-suelo';
import Tecnologia from './pages/tecnologia/containers/tecnologia';


const index = document.getElementById('index');

render((

  <BrowserRouter>
    <div>
      <Route path="/" component={Main} exact />
      <Route path="/separables" component={Tecnologia} />
      <Route path="/exactas" component={RecursoSuelo} />
      <Route path="/homogeneas" component={Acueductos} />
      <Route path="/lineales" component={Impactos} />
    </div>
  </BrowserRouter>
), index);
