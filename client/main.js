import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import react_utilsModule from './modules/react_utils';
import loginModule from './modules/login';
import quotesModule from './modules/quotes';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(react_utilsModule);
app.loadModule(loginModule);
app.loadModule(quotesModule);
app.init();
