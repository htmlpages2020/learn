import React from 'react';
import Form from './pages/form'
import Form_Ajax from './pages/form_ajax'
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path={"/learn/"} component={Form} />
      <Route exact path={"/learn/ajax/"} component={Form_Ajax} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
