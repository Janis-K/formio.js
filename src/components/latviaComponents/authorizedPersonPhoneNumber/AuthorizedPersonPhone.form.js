import Components from '../../Components';
import TextFieldEditDisplay from '../../textfield/editForm/TextField.edit.display';
import TextFieldEditData from '../../textfield/editForm/TextField.edit.data';
import TextFieldEditValidation from '../../textfield/editForm/TextField.edit.validation';

export default function(...extend) {
    return Components.baseEditForm([
        {
            key: 'display',
            components: TextFieldEditDisplay
        },
        {
            key: 'data',
            components: TextFieldEditData
        },
        {
            key: 'validation',
            components: TextFieldEditValidation
        },
    ], ...extend);
}
