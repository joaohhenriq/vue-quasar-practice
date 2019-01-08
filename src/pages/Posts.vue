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
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Posts',
  mounted () {
    // this.getPosts()
    this.setPosts()
  },
  computed: {
    ...mapState('posts', ['posts'])
  },
  methods: {
    ...mapActions('posts', ['setPosts'])
  }
}
</script>

<style>
</style>
