import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Obama',
      updatedText: 'Trump'
    };
  }

  render() {
    const inputName = newValue => {
      this.setState({ updatedText: newValue });
    };

    const changeName = () => {
      this.setState({ text: updatedText });
    };
    const { text, updatedText } = this.state;
    return (
      <>
        <h1>Ki az amcsi elnök</h1>
        <p>{this.state.text}</p>
        <input type="text" onChange={e => inputName(e.target.value)} />
        <button onClick={changeName}> MÓDOSÍT</button>
      </>
    );
  }
}
