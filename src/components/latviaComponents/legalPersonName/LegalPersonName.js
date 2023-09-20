import TextFieldComponent from '../../textfield/TextField';

export default class LegalPersonNameComponent extends TextFieldComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return TextFieldComponent.schema({
            type: 'legalPersonName',
            label: 'Juridiskās personas nosaukums',
            key: 'legalPersonName',
            placeholder: 'AS Sadales Tīkls',
            disabled: true
        });
    }

    static get builderInfo() {
        return {
            title: 'Juridiskās personas nosaukums',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: LegalPersonNameComponent.schema()
        };
    }
}
