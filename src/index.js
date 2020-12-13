import './styles.css';
import * as _ from 'lodash';
import { refs } from './refs/refs.js';
import fetchCountries from './components/fetchCountries.js';
import { clearMarkup, updateMarkup } from './components/create-markup.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import { error, defaultModules } from '@pnotify/core/dist/PNotify';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});


refs.input.addEventListener(
    'input',
    _.debounce(() => {
        if (refs.input.value) {
            fetchCountries(refs.input.value)
                .then(data => dataHandler(data))
                .then(data => updateMarkup(data))
                .catch(() => {
                    clearMarkup();
                });
        } else clearMarkup();
    }, 500),
);

const dataHandler = data => {
    const dataLength = data.length;
    if (dataLength > 10) {
        clearMarkup();
        error({
            text:
                'Too many matches found. Please, enter a more specific query!',
            delay: 3000,
        });
    } else if (dataLength >= 1 && dataLength <= 10) {
        return data;
    } else {
        clearMarkup();
        error({
            text: 'No matches found',
            delay: 3000,
        });
    };
};

