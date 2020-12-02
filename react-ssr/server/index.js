require('@babel/register')({
  presets: [
      '@babel/preset-react',
      '@babel/preset-env'
  ],
});
require('./app.js');
