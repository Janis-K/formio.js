import AddressComponent from '../../address/Address';

export default class AuthorizedPersonAddressComponent extends AddressComponent {
    // eslint-disable-next-line no-unused-vars
    static schema(...extend) {
        return AddressComponent.schema({
            type: 'authorizedPersonAddress',
            label: 'Adrese',
            key: 'authorizedPersonAddress',
            placeholder: 'Pils laukums 3',
            disabled: false
        });
    }

    static get builderInfo() {
        return {
            title: 'Adrese',
            icon: 'building',
            group: 'latvia',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: AuthorizedPersonAddressComponent.schema()
        };
    }
}
