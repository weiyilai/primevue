<script>
import BaseInput from '@primevue/core/baseinput';
import MultiSelectStyle from 'primevue/multiselect/style';

export default {
    name: 'BaseMultiSelect',
    extends: BaseInput,
    props: {
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        scrollHeight: {
            type: String,
            default: '14rem'
        },
        placeholder: String,
        inputId: {
            type: String,
            default: null
        },
        panelClass: {
            type: String,
            default: null
        },
        panelStyle: {
            type: null,
            default: null
        },
        overlayClass: {
            type: String,
            default: null
        },
        overlayStyle: {
            type: null,
            default: null
        },
        dataKey: null,
        showClear: {
            type: Boolean,
            default: false
        },
        clearIcon: {
            type: String,
            default: undefined
        },
        resetFilterOnClear: {
            type: Boolean,
            default: false
        },
        filter: Boolean,
        filterPlaceholder: String,
        filterLocale: String,
        filterMatchMode: {
            type: String,
            default: 'contains'
        },
        filterFields: {
            type: Array,
            default: null
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        display: {
            type: String,
            default: 'comma'
        },
        selectedItemsLabel: {
            type: String,
            default: null
        },
        maxSelectedLabels: {
            type: Number,
            default: null
        },
        selectionLimit: {
            type: Number,
            default: null
        },
        showToggleAll: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        checkboxIcon: {
            type: String,
            default: undefined
        },
        dropdownIcon: {
            type: String,
            default: undefined
        },
        filterIcon: {
            type: String,
            default: undefined
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        removeTokenIcon: {
            type: String,
            default: undefined
        },
        chipIcon: {
            type: String,
            default: undefined
        },
        selectAll: {
            type: Boolean,
            default: null
        },
        resetFilterOnHide: {
            type: Boolean,
            default: false
        },
        virtualScrollerOptions: {
            type: Object,
            default: null
        },
        autoOptionFocus: {
            type: Boolean,
            default: false
        },
        autoFilterFocus: {
            type: Boolean,
            default: false
        },
        focusOnHover: {
            type: Boolean,
            default: true
        },
        highlightOnSelect: {
            type: Boolean,
            default: false
        },
        filterMessage: {
            type: String,
            default: null
        },
        selectionMessage: {
            type: String,
            default: null
        },
        emptySelectionMessage: {
            type: String,
            default: null
        },
        emptyFilterMessage: {
            type: String,
            default: null
        },
        emptyMessage: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        ariaLabel: {
            type: String,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: MultiSelectStyle,
    provide() {
        return {
            $pcMultiSelect: this,
            $parentInstance: this
        };
    }
};
</script>
