// noinspection JSCheckFunctionSignatures

import Input from '../_classes/input/Input';

export default class NameComponent extends Input {
  constructor(component, options, data) {
    super(component, options, data);
    this.checks = [];
  }

  static schema() {
    return NameComponent.schema({
      type: 'name',
      readonly: true
    });
  }

  static builderInfo() {
    return {
      title: 'Lietotāja vārds',
      group: 'basic',
      icon: 'fa fa-table',
      weight: 70,
      documentation: '',
      schema: NameComponent.schema()
    };
  }

  setValue(value, flags) {
    fetch('https://localhost:44367/mock/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => value = data)
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
