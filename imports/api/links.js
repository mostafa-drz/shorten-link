import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links', function() {
        return Links.find({ _user: this.userId });
    });
}