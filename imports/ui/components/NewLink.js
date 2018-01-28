import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Error from './helpers/Error';
import { addLinks } from '../actions/link';
import { connect } from 'react-redux';
class NewLink extends Component {

  constructor(props) {
    super(props);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.initiate = this.initiate.bind(this);
    this.clearMessages = this.clearMessages.bind(this);
  }
  state = {
    url: '',
    error: false,
    status: false,
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { url } = this.state;
    Meteor.call('links.insert', url, (error) => {
      if (error) {
        this.setState({ error: error.message });
      } else {
        this.initiate();
        this.setState({ status: 'Done!' });
      }
    });
  }

  _handleInputChange(url) {
    this.setState({ url });
  }

  initiate() {
    this.setState({
      url: '',
      error: false,
      status: false
    });
  }

  clearMessages() {
    this.setState({
      error: false,
      status: false,
    })
  }

  render() {
    const { error, status, url, links } = this.state;
    return(
      <div>
        {error && <Error message={error} />}
        {status && <p>{status}</p>}
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input type="text"
            placeholder='URL...'
            value={url}
            onChange={(e) => this._handleInputChange(e.target.value)}
            onFocus={(e) => { this.clearMessages() }}
          />
          <button type="submit">Shorten</button>
        </form>
    </div>
    );
  }
}

export default connect(null, { addLinks })(NewLink);