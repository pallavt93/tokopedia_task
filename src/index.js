import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from './client/routes';
import createStore from './helpers/createStore';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {

    const store = createStore();

    const promises = matchRoutes(Routes, req.path)
    .map(({ route, match })=> route.loadData ? route.loadData(store, match) : null )
    .map( promise => {
        if(promise){
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            })
        }
    });

    Promise.all(promises).then(()=> {
        const context = {};
        const content = renderer(req, store, context);

        if(context.notFound){
            res.status(404);
        }
        res.send(content);
    });
});

app.listen(port, ()=> {
    console.log("Listening on port 3000");
})

