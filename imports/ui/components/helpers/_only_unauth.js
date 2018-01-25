import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if (Meteor.user()) {
                this.props.history.push('/links');
            }
        }
        componentWillUpdate(nextProps) {
            if (Meteor.user()) {
                this.props.history.push('/link');
            }
        }
        render() {
            return ( < ComposedComponent {...this.props }
                />);
            }
        }
        return Authentication;
    }