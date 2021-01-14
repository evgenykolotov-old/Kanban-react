import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import { getStore } from './app/store';
// import connect from '@vkontakte/vk-connect';
import * as backend from './api';
import * as router from "./router";
import App from './app/components/App/AppContainer';

const store = getStore();
const route = router.initialize();
backend.initialize();

ReactDOM.render(<App router={route} store={store} />, document.getElementById("root"));
