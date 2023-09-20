import TextFieldComponent from '../../textfield/TextField';

export default class AuthorizedPersonFirstNameComponent extends TextFieldComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return TextFieldComponent.schema({
            type: 'authorizedPersonFirstName',
            label: 'Autorizētās personas vārds',
            key: 'authorizedPersonFirstName',
            placeholder: 'Juris',
            disabled: true
        });
    }

    static get builderInfo() {
        return {
            title: 'Autorizētās personas vārds',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: AuthorizedPersonFirstNameComponent.schema()
        };
    }
}
