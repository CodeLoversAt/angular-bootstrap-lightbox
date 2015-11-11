// package metadata file for Meteor.js
var options = {
  "version": "0.10.0",
  "name": "codelovers:angular-bootstrap-lightbox",
  "where": "client",
  "documentation": "README.md"
};

Package.describe({
  name: options.name,
  version: options.version,
  git: 'https://github.com/compact/angular-bootstrap-lightbox.git',
  summary: 'An AngularJS lightbox built using UI Bootstrap Modal.',
  documentation: options.documentation
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');
  api.use('angular:angular@1.4.7', options.where);
  api.use('angularui:angular-ui-bootstrap@0.13.0', options.where);
  api.addFiles([
    'dist/angular-bootstrap-lightbox.js',
    'dist/angular-bootstrap-lightbox.css'
  ], options.where);
});
