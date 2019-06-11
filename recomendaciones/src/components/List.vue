<template>
<li class="recomendaciones">
    <h2>
        {{ recomendados }}
    </h2>
</li>
</template>

<script >
export default {
  name: 'list',
  props: [ 'recomendados' ],
  data () {
    return {
        nombres: [
            'Juan David', 'Santiago'
        ]
    }
  }
}
</script>

<style>
li.recomendaciones {
  display: block;
  margin: 10px 0;
}
</style>