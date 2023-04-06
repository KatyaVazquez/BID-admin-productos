import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/products/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route path="products/:id" render={ (routeProps) => <Detail {...routeProps} />} />
        <Route path="products/:id/edit" render={ (routeProps) => <Update {...routeProps} updateProduct={updateProduct} />}/>
      </BrowserRouter>
    </div>
  );
}
export default App;

