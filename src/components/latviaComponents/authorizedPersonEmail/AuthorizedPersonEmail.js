import TextFieldComponent from '../../textfield/TextField';

export default class AuthorizedPersonEmailComponent extends TextFieldComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return TextFieldComponent.schema({
            type: 'authorizedPersonEmail',
            label: 'E-pasts',
            key: 'authorizedPersonEmail',
            placeholder: 'Juris.Paraudzins@vraa.gov.lv',
            disabled: false
        });
    }

    static get builderInfo() {
        return {
            title: 'E-pasts',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: AuthorizedPersonEmailComponent.schema()
        };
    }
}
