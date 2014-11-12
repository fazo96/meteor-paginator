Package.describe({
  summary: "Utility to handle content pagination (queries and visualization) in meteor",
  version: "0.1",
  git: "https://github.com/fazo96/meteor-paginator"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('coffeescript','client');
  api.addFiles('paginator.coffee');
  api.export('Paginator','client');
});
