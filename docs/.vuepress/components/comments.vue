<template>
  <div class="page-edit">
    <Disqus :key="attrs.identifier" v-bind="attrs" />
  </div>
</template>

<script>
export default {
  name: 'comments',
  computed: {
    attrs () {
      const { origin, pathname } = window.location
      const url = origin + pathname
      const { title } = this.$page
      console.log(pathname)
      return { shortname: 'abroadviser', url, identifier: pathname, title }
    }
  },
  watch: {
    'attrs.identifier' (identifier) {
      if (window && window.DISQUS) {
        window.DISQUS.reset({ reload: true, config () { this.page.identifier = identifier } })
      }
    }
  }
}
</script>
