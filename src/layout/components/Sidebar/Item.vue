<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: yifang
 * @Date: 2022-06-03 16:47:46
 * @LastEditors: yifang
 * @LastEditTime: 2022-06-03 17:50:58
 * @Author: laptop-fpejg53f
-->
<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render (h, context) {
    const { icon, title } = context.props
    const vnodes = []
    if (icon)
    {
      if (icon.includes('el-icon'))
      {
        vondes.push(<i class={[icon, 'sub-el-icon']} />)
      } else
      {
        vnodes.push(<svg-icon icon-class={icon} />)
      }
    }
    if (title)
    {
      vnodes.push(<span slot="title">{(title)}</span>)
    }
    return vnodes
  }
}
</script>
<style lang="scss" scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>