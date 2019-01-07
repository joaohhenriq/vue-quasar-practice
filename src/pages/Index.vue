<template>
  <q-page class="container"> <!--servirá como container-->
    <!--<img alt="Quasar logo" src="~assets/quasar-logo-full.svg">-->
    <!--<div class="q-ml-sm q-mt-sm q-mr-sm border-black">DIV</div>-->
    <!--sintaxe de espaçamento: https://quasar-framework.org/components/spacing.html-->

    <!--Flex CSS: https://quasar-framework.org/components/flex-css.html-->
    <div class="row justify-center gutter-xs"> <!--linha--> <!--Gutter dá espaçamento entre os botões-->
      <div class="col-lg-3 col-xs-9" > <!--coluna--> <!--segunda classe de coluna para rodar em celular-->
        <q-btn color="primary" class="full-width">Button</q-btn>
      </div>
      <div class="col-lg-3 col-xs-9"> <!--coluna-->
        <q-btn color="primary" class="full-width">Button</q-btn>
      </div>
      <div class="col-lg-3 col-xs-9"> <!--coluna-->
        <q-btn color="primary" class="full-width">Button</q-btn>
      </div>

      <!--<div class="col">
        <q-btn color="dark" class="full-width">Button</q-btn>
      </div>-->
    </div>

  </q-page>
</template>

<style>
.border-black {
  border: 1px solid black;
}
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
