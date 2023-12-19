import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасположениеMixin
} from '../mixins/regenerated/models/i-i-s-programma-8-расположение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасположениеMixin, Validations, {
});

defineProjections(Model);

export default Model;
