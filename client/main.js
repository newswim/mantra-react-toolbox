import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import react_utilsModule from './modules/react_utils';
import loginModule from './modules/login';
import quotesModule from './modules/quotes';
import products_panelModule from './modules/products_panel';
import new_productModule from './modules/new_product';


// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(react_utilsModule);
app.loadModule(loginModule);
app.loadModule(quotesModule);
app.loadModule(new_productModule);
app.loadModule(products_panelModule);
app.init();
