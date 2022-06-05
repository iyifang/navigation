<template>
  <div class="app wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container"
         :class="{hasTageView:needTagsView}">
      <div :class="{'fixed-header': fixedHeader}">
        <Navber />
        <tags-view v-if="needTagsView" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Sidebar from './components/Sidebar'
import TagsView from './components/TagsView'
import Navber from './components/Navbar'
// import { Sidebar, Navber, TagsView } from "./components";
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navber,
    TagsView
  },
  computed: {
    ...mapState({
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader,
    })
  }
}
</script>

<style lang="scss">
</style>