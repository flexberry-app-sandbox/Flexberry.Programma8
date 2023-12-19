import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-programma-8-серверная', 'Unit | Model | i-i-s-programma-8-серверная', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-programma-8-должность',
    'model:i-i-s-programma-8-контроллер',
    'model:i-i-s-programma-8-отчет-о-сервере',
    'model:i-i-s-programma-8-расположение',
    'model:i-i-s-programma-8-сенсоры',
    'model:i-i-s-programma-8-серверная',
    'model:i-i-s-programma-8-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
