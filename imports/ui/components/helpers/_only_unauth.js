import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if (this.props.user) {
                this.props.history.push('/links');
            }
        }
        componentWillUpdate(nextProps) {
            if (this.props.user) {
                this.props.history.push('/link');
            }
        }
        render() {
            return ( <ComposedComponent {...this.props }/> );
            }
        }

        function mapStateToProps(state) {
            return {
                user: state.auth.user
            }
        }

        return connect(mapStateToProps)(Authentication);
    }