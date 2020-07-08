import React, {useState} from 'react';
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

  //hook
  const [state, setstate] = useState(store.getState());
  store.subscribe(()=>{// quand le store change il faut changer le state
      setstate(store.getState());
  });

  return (
    <>
      <Banner></Banner>
      {JSON.stringify(state)}
      <MemeNavBar />
      <div className="App">
        {/* meme={{ selectedImg: { url: 'seigneur.jpg', id: 0 }, texts: [{ x: 50, y: 32, value: 'devenir pro react', fontSize: 10 }], temporaryText: { x: 50, y: 75, value: 'easy', fontSize: 10 } }} */}
        <MemeSvgViewer store={store} />
        <MemeFormEditor store={store} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
