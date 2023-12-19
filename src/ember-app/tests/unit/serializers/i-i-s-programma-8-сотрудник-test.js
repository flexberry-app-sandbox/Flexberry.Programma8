import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-programma-8-сотрудник', 'Unit | Serializer | i-i-s-programma-8-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-programma-8-сотрудник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-programma-8-режим-сервера',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
