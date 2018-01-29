import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { isURL, isBoolean } from 'validator';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function() {
        return Links.find({ _user: this.userId });
    });
}

Meteor.methods({
    'links.insert' (url) {
        if (!this.userId) {
            throw new Meteor.Error('You are not authorized');
        }
        if (!isURL(url)) {
            throw new Meteor.Error('It is not a valid url');
        }
        Links.insert({
            _id: shortid.generate(),
            url,
            _user: this.userId,
            visible: true
        });
    },

    'links.updateVisiblity' ({ _id, visible }) {
        if (!this.userId) {
            throw new Meteor.Error('You are not authorized');
        }
        Links.update({ _id, _user: this.userId }, { $set: { visible } });
    }
});