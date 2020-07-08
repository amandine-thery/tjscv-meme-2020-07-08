import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import MemeFormEditor from './components/MemeFormEditor/MemeFormEditor';
import MemeSvgViewer from './components/MemeSvgViewer/MemeSvgViewer';
import MemeNavBar from './components/MemeNavBar/MemeNavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import store from './reducer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

//store={store} on peut mettre à la place du premier store monstore

function App() {

  //hook
  const [state, setstate] = useState(store.getState());
  store.subscribe(()=>{// quand le store change il faut changer le state
      setstate(store.getState());
  });

  //let {meme} = useParams();

  return (
    <>
      <Banner></Banner>
      {JSON.stringify(state)}
      <div className="App">
        <Router>
          <MemeNavBar />
          {/* meme={{ selectedImg: { url: 'seigneur.jpg', id: 0 }, texts: [{ x: 50, y: 32, value: 'devenir pro react', fontSize: 10 }], temporaryText: { x: 50, y: 75, value: 'easy', fontSize: 10 } }} */}
          <MemeSvgViewer store={store} />
          <Switch>
            <Route path="/" exact>
              <div style={{display:'inline-block'}}>
                <h2>Creer vous même votre meme & taquiner vos amis !!!</h2>
              </div>
            </Route>
            <Route path="/create" exact>
              <MemeFormEditor store={store} />
            </Route>
            <Route path="/create/:meme">
              <ExempleMeme />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer></Footer>
    </>
  );
}

function ExempleMeme() {
  let { meme } = useParams();
  return <h3>{meme}</h3>;
}

export default App;
