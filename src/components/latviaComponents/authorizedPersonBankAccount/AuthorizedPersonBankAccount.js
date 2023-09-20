import TextFieldComponent from '../../textfield/TextField';

export default class AuthorizedPersonBankAccountComponent extends TextFieldComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return TextFieldComponent.schema({
            type: 'authorizedPersonBankAccount',
            label: 'Bankas konts',
            key: 'authorizedPersonBankAccount',
            placeholder: 'LV97HABA0012345678910',
            disabled: false
        });
    }

    static get builderInfo() {
        return {
            title: 'Bankas konts',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: AuthorizedPersonBankAccountComponent.schema()
        };
    }
}
