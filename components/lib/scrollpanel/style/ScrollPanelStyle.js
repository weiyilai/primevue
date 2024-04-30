import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-scrollpanel p-component',
    contentContainer: 'p-scrollpanel-content-container',
    content: 'p-scrollpanel-content',
    barX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
    barY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};

export default BaseStyle.extend({
    name: 'scrollpanel',
    classes
});
