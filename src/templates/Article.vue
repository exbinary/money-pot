<template>
  <Layout>
    <div v-html="$page.article.content" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  article (id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.article.title,
    }
  },
}
</script>
