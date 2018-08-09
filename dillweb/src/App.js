import React from 'react';
import Navbars from './components/Navbars'
import Footer from './components/Footer';


export default class App extends React.Component {
  render() {
    return(
      <div>
        <div>
        <Navbars/>
        </div>   
        <div>
        <Footer/>
        </div>
      </div>
    );
  }
}
