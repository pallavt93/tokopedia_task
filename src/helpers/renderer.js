import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/routes';

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store} >
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <link
                rel="stylesheet"
                type="text/css"
                href="/styles.css"
            />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
            />
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE=${serialize(store.getState())} 
            </script>
            <script src="/bundle.js"></script>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>
            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>
        </body>
    </html>`;
}

