import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if (!Meteor.user()) {
                this.props.history.push('/');
            }
        }
        componentWillUpdate(nextProps) {
            if (!Meteor.user()) {
                this.props.history.push('/');
            }
        }
        render() {
            return (<ComposedComponent {...this.props }/>);
        }
    }
    return Authentication;
}