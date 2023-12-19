import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDКонтроллера: DS.attr('number'),
  модель: DS.attr('string'),
  сенсоры: DS.belongsTo('i-i-s-programma-8-сенсоры', { inverse: null, async: false }),
  серверная: DS.belongsTo('i-i-s-programma-8-серверная', { inverse: 'контроллер', async: false })
});

export let ValidationRules = {
  iDКонтроллера: {
    descriptionKey: 'models.i-i-s-programma-8-контроллер.validations.iDКонтроллера.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  модель: {
    descriptionKey: 'models.i-i-s-programma-8-контроллер.validations.модель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сенсоры: {
    descriptionKey: 'models.i-i-s-programma-8-контроллер.validations.сенсоры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  серверная: {
    descriptionKey: 'models.i-i-s-programma-8-контроллер.validations.серверная.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтроллерE', 'i-i-s-programma-8-контроллер', {
    модель: attr('Модель', { index: 0 }),
    iDКонтроллера: attr('I d контроллера', { index: 1 }),
    сенсоры: belongsTo('i-i-s-programma-8-сенсоры', 'Сенсоры', {
      тип: attr('Тип', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'тип' })
  });
};
