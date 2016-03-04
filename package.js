Package.describe({
  name: 'jcheroske:modernizr-touch',
  version: '3.3.1',
  summary: 'Modernizr with just the touch events test.',
  git: 'https://github.com/jcheroske/meteor-modernizr-touch.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('index.js', 'client');
});
