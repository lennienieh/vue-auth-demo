<template>
  <div>
    <div>main</div>
    <!--<Logo/>-->
    <div>
      <ul>
        <Tree class="item" :model="treeData">
        </Tree>
      </ul>
    </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

import Tree from '~components/Tree.vue'

export default {
  components: {
    Logo,
    Tree
  },
  data() {
    return {
      treeData: {
        name: 'My Tree',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
