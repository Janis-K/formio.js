import TextFieldComponent from '../../textfield/TextField';

export default class AuthorizedPersonPhoneComponent extends TextFieldComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return TextFieldComponent.schema({
            type: 'authorizedPersonPhone',
            label: 'Tālruņa numurs',
            key: 'authorizedPersonPhone',
            placeholder: '37120000002',
            disabled: false
        });
    }

    static get builderInfo() {
        return {
            title: 'Tālruņa numurs',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: AuthorizedPersonPhoneComponent.schema()
        };
    }
}
