import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MemeFormEditor from './components/MemeFormEditor/MemeFormEditor';
import MemeSvgViewer from './components/MemeSvgViewer/MemeSvgViewer';
import MemeNavBar from './components/MemeNavBar/MemeNavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import store from './reducer';

//store={store} on peut mettre à la place du premier store monstore

function App() {
  return (
    <>
      <Banner></Banner>
      <MemeNavBar />
      <div className="App">
        <MemeSvgViewer store={store} meme={{ selectedImg: { url: 'seigneur.jpg', id: 0 }, texts: [{ x: 50, y: 32, value: 'devenir pro react', fontSize: 10 }], temporaryText: { x: 50, y: 75, value: 'easy', fontSize: 10 } }} />
        <MemeFormEditor store={store} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
