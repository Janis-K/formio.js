import TextFieldComponent from '../../textfield/TextField';

export default class AuthorizedPersonPersonalCodeComponent extends TextFieldComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return TextFieldComponent.schema({
            type: 'authorizedPersonPersonalCode',
            label: 'Autorizētās personas kods',
            key: 'authorizedPersonPersonalCode',
            placeholder: '181118',
            disabled: false
        });
    }

    static get builderInfo() {
        return {
            title: 'Autorizētās personas kods',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: AuthorizedPersonPersonalCodeComponent.schema()
        };
    }
}
