import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Form, Input, FormItem, Message, Container, Header, Aside, Dropdown,DropdownMenu, DropdownItem } from 'element-ui'

Vue.use(Button)
  .use(Form)
  .use(Input)
  .use(FormItem)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)

Vue.prototype.$message = Message

