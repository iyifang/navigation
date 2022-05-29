import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { 
  Button, 
  Form, 
  Input, 
  FormItem, 
  Message, 
  Container, 
  Header, 
  Aside, 
  Main, 
  Dropdown, 
  DropdownMenu, 
  DropdownItem,
  Menu,
  MenuItem,
  MenuItemGroup,
  Footer,
  Submenu,
  RadioGroup,
  RadioButton

} from 'element-ui'

Vue.use(Button)
  .use(Form)
  .use(Input)
  .use(FormItem)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(MenuItemGroup)
  .use(Footer)
  .use(RadioGroup)
  .use(RadioButton)
Vue.prototype.$message = Message

