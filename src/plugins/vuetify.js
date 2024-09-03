import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VApp, VAppBar, VMain, VContainer, VBtn, VForm, VTextField, VCard, VList, VListItem, VListItemContent, VListItemTitle, VListItemSubtitle, VListItemAction } from 'vuetify/components';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  components: {
    VApp,
    VAppBar,
    VMain,
    VContainer,
    VBtn,
    VForm,
    VTextField,
    VCard,
    VList,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VListItemAction,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1976D2', // чиний
          secondary: '#424242', // черный
          background: '#FFFFFF', // белый
        },
      },
    },
  },
});
