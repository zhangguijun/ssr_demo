import { createStoreMap } from '../../client/store/index'
const { renderToString } = require('react-dom/server');

function templating(template) {
    return props => template.replace(/<!--([\s\S]*?)-->/g, (_, key) => props[key.trim()]);
}


module.exports = async function(ctx, template) {
    try {
        const render = templating(template);
        // const jsx = await serverBundle(ctx);
        const html = renderToString(
          <Provider store = { store }>
              <StaticRouter location={ctx.url}>
                  <RouterConfig />
              </StaticRouter>
          </Provider>

      );
        const body = render({
            html,
            store: `<script>window.__STORE__ = ${JSON.stringify(data, null, 4)}</script>`,
        });
        ctx.body = body;
        ctx.type = 'text/html';
    }
    catch (err) {
        console.error(err.message);
        ctx.body = err.message;
        ctx.type = 'text/html';
    }
} 