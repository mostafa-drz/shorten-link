import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux'; 
export default function(ComposedComponent,user) {
    class Authentication extends Component {
        componentWillMount() {
          if(!this.props.user){
            this.props.history.push('/');
          }
        }

      componentWillUpdate(nextProps) {
        if (!nextProps.user) {
          this.props.history.push('/');
        }
      }
        render() {
            return (<ComposedComponent {...this.props }/>);
        }
    }
    function mapSateToProps(state){
      return{
        user: state.auth.user
      }
    }
    return connect(mapSateToProps)(Authentication);
}