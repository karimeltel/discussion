import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export const Root = document.getElementsByTagName('root')[0];
/*
 *
 * More information about creation of custom palette and themes you can find out at:
 *
 *       Official docs:  http://www.material-ui.com/#/customization/themes
 * Official theme repo:  https://github.com/callemall/material-ui/tree/master/src/styles
 *
 * */
export const Original = getMuiTheme();
export const Theme = getMuiTheme({
  palette: {
    primary1Color: '#afca0b',
    primary2Color: '#002f53',
    accent1Color: '#a1b1c9',
    textColor: '#4c5356',
    pickerHeaderColor: '#6884a5'
  },
  raisedButton: {
    secondaryColor: '#6884a5'
  },
  datePicker: {
    selectColor: '#6884a5'
  },
  menuItem: {
    selectedTextColor: '#afca0b'
  }
});
