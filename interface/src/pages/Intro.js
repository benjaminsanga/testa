import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Intro from '../components/introText';
import '../css/intro.css';

class Start extends React.Component {
  render(){
    return (
      <div className="App">
        <Header showSubtitle={false} />
        <Intro />
        <Footer />
      </div>
    );
  };
}

export default Start;