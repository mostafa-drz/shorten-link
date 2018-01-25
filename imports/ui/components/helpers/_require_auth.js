import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux'; 
export default function(ComposedComponent,user) {
    class Authentication extends Component {
        componentWillMount() {
          if(!this.props.user){
            console.log(this.props);
            console.log('no user mount');
          }
        }

      componentWillUpdate(nextProps) {
        if (!nextProps.user) {
          console.log('no user update');
        }
      }
        render() {
            return (<ComposedComponent {...this.props }/>);
        }
    }
    function mapSateToProps(state){
      console.log(state);
      return{
        user: state.auth.user
      }
    }
    return connect(mapSateToProps)(Authentication);
}