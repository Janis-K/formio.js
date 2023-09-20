import TextFieldComponent from '../../textfield/TextField';

export default class AuthorizedPersonLastNameComponent extends TextFieldComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return TextFieldComponent.schema({
            type: 'authorizedPersonLastName',
            label: 'Autorizētās personas uzvārds',
            key: 'authorizedPersonLastName',
            placeholder: 'Paraudziņš',
            disabled: false
        });
    }

    static get builderInfo() {
        return {
            title: 'Autorizētās personas uzvārds',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: AuthorizedPersonLastNameComponent.schema()
        };
    }
}
