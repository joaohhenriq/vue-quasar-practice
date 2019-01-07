<template>
  <q-page class="container q-pa-xs">
    <!-- content -->
    <div class="row gutter-sm">
      <div class="col-xs-12 col-lg-4" v-for="(post, index) in posts" :key="index">
        <q-card>
          <q-card-media>
            <img :src="post.better_featured_image.source_url">
          </q-card-media>
          <q-card-title>
            {{ post.title.rendered }}
          </q-card-title>
          <q-card-separator />

          <q-card-actions>
            <q-btn push color="primary" label="Detalhes" class="full-width" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      this.$q.loading.show({
        delay: 400 // ms
      })
      this.$axios.get(`${process.env.API}/v2/posts`)
        .then((res) => {
          this.posts = res.data
          this.$q.loading.hide()
          console.log('POSTS', res.data)
        })
        .catch((err) => {
          console.error(err)
          this.$q.loading.hide()
        })
    }
  }
}
</script>

<style>
</style>
