import React from 'react';
//Feature 1
import data from './data.json';
import Products from './Components/Products';


 class  App extends React.Component {
constructor(){
  super();
  this.state=({
    products:data.products,
    size:"",
    sort:""
  });
}
  render(){
    
    return (
      <div className="grid-container">
      <header>
      <a href="/">React Shopping Cart</a>
      </header>
      <main>
         <div className="content">
         <div className="main">
          <Products products={this.state.products}></Products>
         </div>
         <div className="sidebar">
          cart items
          <div>
           Order Time 11 AM  - 8 PM
          </div>
         </div>
         </div>
      </main>
      <footer>
        All rights reserved
      </footer>
      </div>
     );
  }
  
}

export default App;
