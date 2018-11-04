import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component.jsx';

const topBar = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Root,
    domElementGetter,
});

export function bootstrap(props) {
    return topBar.bootstrap(props);
}

export function mount(props) {
    return topBar.mount(props);
}

export function unmount(props) {
    return topBar.unmount(props);
}

function domElementGetter() {
    return document.getElementById("portal");
}
