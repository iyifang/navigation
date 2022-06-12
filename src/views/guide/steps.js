const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: '侧边栏',
      description: '打开和关闭侧栏',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: '面包屑',
      description: '指示当前页面位置',
      position: 'bottom'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: '全屏',
      description: '将页面设置为全屏',
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: '标记视图',
      description: '您访问的页面的历史记录',
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
