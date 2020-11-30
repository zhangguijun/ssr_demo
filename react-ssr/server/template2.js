export default ({ title, scripts, css, html }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name='viewport' content='width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'  shrink-to-fit=no />
      <meta name="theme-color" content="#000000" />
      <title>${title}</title>
      ${css}
    </head>
    <body>
      <div id="app">${html}</div>
      ${scripts}
    </body>
  </html>
`