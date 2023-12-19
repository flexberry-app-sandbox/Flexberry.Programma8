import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProgramma_8ДолжностьLForm from './forms/i-i-s-programma-8-должность-l';
import IISProgramma_8ОтчетОСервереLForm from './forms/i-i-s-programma-8-отчет-о-сервере-l';
import IISProgramma_8РасположениеLForm from './forms/i-i-s-programma-8-расположение-l';
import IISProgramma_8СенсорыLForm from './forms/i-i-s-programma-8-сенсоры-l';
import IISProgramma_8СервернаяLForm from './forms/i-i-s-programma-8-серверная-l';
import IISProgramma_8СотрудникLForm from './forms/i-i-s-programma-8-сотрудник-l';
import IISProgramma_8ДолжностьEForm from './forms/i-i-s-programma-8-должность-e';
import IISProgramma_8ОтчетОСервереEForm from './forms/i-i-s-programma-8-отчет-о-сервере-e';
import IISProgramma_8РасположениеEForm from './forms/i-i-s-programma-8-расположение-e';
import IISProgramma_8СенсорыEForm from './forms/i-i-s-programma-8-сенсоры-e';
import IISProgramma_8СервернаяEForm from './forms/i-i-s-programma-8-серверная-e';
import IISProgramma_8СотрудникEForm from './forms/i-i-s-programma-8-сотрудник-e';
import IISProgramma_8ДолжностьModel from './models/i-i-s-programma-8-должность';
import IISProgramma_8КонтроллерModel from './models/i-i-s-programma-8-контроллер';
import IISProgramma_8ОтчетОСервереModel from './models/i-i-s-programma-8-отчет-о-сервере';
import IISProgramma_8РасположениеModel from './models/i-i-s-programma-8-расположение';
import IISProgramma_8СенсорыModel from './models/i-i-s-programma-8-сенсоры';
import IISProgramma_8СервернаяModel from './models/i-i-s-programma-8-серверная';
import IISProgramma_8СотрудникModel from './models/i-i-s-programma-8-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-programma-8-должность': IISProgramma_8ДолжностьModel,
    'i-i-s-programma-8-контроллер': IISProgramma_8КонтроллерModel,
    'i-i-s-programma-8-отчет-о-сервере': IISProgramma_8ОтчетОСервереModel,
    'i-i-s-programma-8-расположение': IISProgramma_8РасположениеModel,
    'i-i-s-programma-8-сенсоры': IISProgramma_8СенсорыModel,
    'i-i-s-programma-8-серверная': IISProgramma_8СервернаяModel,
    'i-i-s-programma-8-сотрудник': IISProgramma_8СотрудникModel
  },

  'application-name': 'Programma_8',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Programma_8',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Programma_8',
          title: 'Programma_8'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-programma-8-должность-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-programma-8-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          контроллер: {
            caption: 'Контроллер',
            title: 'Контроллер',
            'i-i-s-programma-8-сенсоры-l': {
              caption: 'Сенсоры',
              title: ''
            }
          },
          сервер: {
            caption: 'Сервер',
            title: 'Сервер',
            'i-i-s-programma-8-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            },
            'i-i-s-programma-8-серверная-l': {
              caption: 'Серверная',
              title: ''
            },
            'i-i-s-programma-8-расположение-l': {
              caption: 'Расположение',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-programma-8-должность-l': IISProgramma_8ДолжностьLForm,
    'i-i-s-programma-8-отчет-о-сервере-l': IISProgramma_8ОтчетОСервереLForm,
    'i-i-s-programma-8-расположение-l': IISProgramma_8РасположениеLForm,
    'i-i-s-programma-8-сенсоры-l': IISProgramma_8СенсорыLForm,
    'i-i-s-programma-8-серверная-l': IISProgramma_8СервернаяLForm,
    'i-i-s-programma-8-сотрудник-l': IISProgramma_8СотрудникLForm,
    'i-i-s-programma-8-должность-e': IISProgramma_8ДолжностьEForm,
    'i-i-s-programma-8-отчет-о-сервере-e': IISProgramma_8ОтчетОСервереEForm,
    'i-i-s-programma-8-расположение-e': IISProgramma_8РасположениеEForm,
    'i-i-s-programma-8-сенсоры-e': IISProgramma_8СенсорыEForm,
    'i-i-s-programma-8-серверная-e': IISProgramma_8СервернаяEForm,
    'i-i-s-programma-8-сотрудник-e': IISProgramma_8СотрудникEForm
  },

});

export default translations;
