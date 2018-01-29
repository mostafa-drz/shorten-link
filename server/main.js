import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { Links } from '../imports/api/links';

Meteor.startup(() => {
    WebApp.connectHandlers.use((req, res, next) => {
        const _id = req.url.slice(1);
        const link = Links.findOne({ _id });
        if (link) {
            res.statusCode = 302;
            const url = normalizeURL(link.url);
            res.setHeader('Location', url);
            res.end();
            try {
                Links.update({ _id }, { $inc: { visitedCount: 1 }, $set: { lastVisit: new Date() } });
            } catch (error) {
                throw new Meteor.Error(error);
            }
        } else {
            next();
        }
    });
});

normalizeURL = (url) => {
    let newUrl = url;
    if (newUrl.indexOf('http://') === -1) {
        newUrl = 'http://' + url;
    }
    return newUrl;
}