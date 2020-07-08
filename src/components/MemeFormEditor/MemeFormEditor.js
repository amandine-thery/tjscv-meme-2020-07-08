import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeFormEditor.module.scss';
import ImageFlowLayout from '../ImageFlowLayout/ImageFlowLayout';
import Button from '../Button/Button';

class MemeFormEditor extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { selectedImg: { url: undefined, id: undefined }, texts: [], temporaryText: { x: 50, y: 0, value: "", fontSize: 10 } }
    this.state = this.props.store.getState();
    props.store.subscribe(() => {
      this.setState(props.store.getState());
    });
  }
  resetForm() {
    this.setState({ selectedImg: { url: undefined, id: undefined }, temporaryText: { x: 50, y: 0, value: "", fontSize: 10 }, texts: [] });
  }
  saveMeme() {

    console.log(this.state);
  }
  render() {
    return (
      <form className={styles.MemeFormEditor} data-testid="MemeFormEditor" onSubmit={e=>{e.preventDefault(); this.saveMeme();}}>
        <h1>creer votre meme</h1>
        <ImageFlowLayout images={[]} onClick={(img) => { this.setState({ selectedImg: img }) }} />
        <h2>Editez le text</h2>
        <input type="text" name="temporaryText" value={this.state.temporaryText.value} onChange={e => this.setState({ temporaryText: { ...this.state.temporaryText, value: e.currentTarget.value } })} />
        <h3>Positionnez texte</h3>
        <br />x:<input type="number" min="0" step="1" value={this.state.temporaryText.x} onChange={e => this.setState({ temporaryText: { ...this.state.temporaryText, x: e.currentTarget.value } })} />
        <br />y:<input type="number" min="0" step="1" value={this.state.temporaryText.y} onChange={e => this.setState({ temporaryText: { ...this.state.temporaryText, y: e.currentTarget.value } })} />
        <br />
        <br />font size:<input type="number" min="0" step="1" max="20" value={this.state.temporaryText.x} onChange={e => this.setState({ temporaryText: { ...this.state.temporaryText, fontSize: e.currentTarget.value } })} />
        <br />
        <Button bgColor="skyblue" onClick={e => {
          this.setState({ texts: [...this.state.texts, this.state.temporaryText], temporaryText: { x: 0, y: 0, value: "" } })
        }}>Ajouter</Button>
        <h2>Enregistrer meme</h2>
        <Button onClick={e => { this.resetForm() }} bgColor="lightgrey">Reinitialiser</Button>
        <Button onClick={e => { this.saveMeme() }} bgColor="tomato">Enregistrer</Button>
      </form>
    );
  }
}
MemeFormEditor.propTypes = {};

MemeFormEditor.defaultProps = {};

export default MemeFormEditor;
