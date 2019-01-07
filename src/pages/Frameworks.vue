<template>
  <q-page class="container q-pa-xs">
    <!-- content -->
    <div class="row gutter-sm">
      <div class="col-xs-12 col-lg-4" v-for="framework in 6" :key="framework">
        <q-card>
          <q-card-media>
            <img src="~assets/quasar-logo-full.svg">
          </q-card-media>
          <q-card-title>
            Quasar
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            Descição do framework
          </q-card-main>
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
  name: 'Frameworks'
}
</script>

<style>
</style>
