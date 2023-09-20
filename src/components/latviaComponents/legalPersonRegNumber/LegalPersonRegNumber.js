import TextFieldComponent from '../../textfield/TextField';

export default class LegalPersonRegNumberComponent extends TextFieldComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return TextFieldComponent.schema({
            type: 'legalPersonRegNumber',
            label: 'Juridiskās personas reģistrācijas numurs',
            key: 'legalPersonRegNumber',
            placeholder: '40003857687',
            disabled: true
        });
    }

    static get builderInfo() {
        return {
            title: 'Juridiskās personas reģistrācijas numurs',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: LegalPersonRegNumberComponent.schema()
        };
    }
}
