import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeSvgViewer.module.scss';

const MemeSvgViewer = (props) => (
  <svg className={styles.MemeSvgViewer} data-testid="MemeSvgViewer"
  viewBox="0 0 100 100" 
  >
    <image xlinkHref={`/img/${props.meme.selectedImg.url}`} x="0"  y="0" height="100" width="100"/>
    {props.meme.texts.map((e,i)=><text x={e.x} fontSize={e.fontSize} textAnchor="middle" fill="WHITE" y={e.y} key={`memetext-${i}`}>{e.value}</text>
)}
{props.meme.temporaryText.value.length>0 && (<text x={props.meme.temporaryText.x} fontSize={props.meme.temporaryText.fontSize} textAnchor="middle" fontStyle="italic" fill="lightcyan" y={props.meme.temporaryText.y} >{props.meme.temporaryText.value}</text>
) }
  </svg>
);

MemeSvgViewer.propTypes = {
  meme: PropTypes.object.isRequired 
};

MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer;
