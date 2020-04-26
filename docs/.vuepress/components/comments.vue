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
      return { shortname: 'abroadviser', url, identifier: pathname, title }
    }
  }
}
</script>
