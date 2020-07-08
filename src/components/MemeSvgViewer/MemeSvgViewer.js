import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeSvgViewer.module.scss';

// viewBox pour limiter la fenêtre
//props.store.getState().temporaryText.value.length le .length c'est pour calculer la longueur de la chaîne de caractères de temporaryText.value

const MemeSvgViewer = (props) => {

  //utilisation d'un hook car nous ne sommes pas dans une classe
  const [state, setstate] = useState(props.store.getState());
  // Similaire à componentDidMount et componentDidUpdate :  
  useEffect(() => {   
    props.store.subscribe(()=>{ //props tout court car on est dans une fonction
      setstate(props.store.getState());
    });
  }, []);// [] pour ne faire componentDidMount une seule fois*/


  return (
    <svg className={styles.MemeSvgViewer} data-testid="MemeSvgViewer" viewBox="0 0 100 100">
      <image xlinkHref={`/img/${props.store.getState().selectedImg.url}`} x="0"  y="0" height="100" width="100"/>
      {props.store.getState().texts.map((e,i)=><text x={e.x} fontSize={e.fontSize} textAnchor="middle" fill="WHITE" y={e.y} key={`memetext-${i}`}>{e.value}</text>
  )}
  {props.store.getState().temporaryText.value.length>0 && (<text x={props.store.getState().temporaryText.x} fontSize={props.store.getState().temporaryText.fontSize} textAnchor="middle" fontStyle="italic" fill="lightcyan" y={props.store.getState().temporaryText.y} >{props.store.getState().temporaryText.value}</text>
  ) }
    </svg>
  );
};

MemeSvgViewer.propTypes = {
  //meme: PropTypes.object.isRequired 
};

MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer;
