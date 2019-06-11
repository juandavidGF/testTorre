<template>
  <v-app>

    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Torre</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>One</v-btn>
        <v-btn flat>Two</v-btn>
        <v-btn flat>Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <ul>
        <v-btn @click="refreshRecom">holaRecom</v-btn>
        <!-- <list v-for="recom in listRecom"/>  -->
      </ul>      
    </v-content>
  </v-app>
</template>

<script>
import List from './components/List.vue'
import getRecom from '../api/index.js'

export default {
  name: 'App',
  components: {
    List
  },
  data () {
    return {
      listRecom: []
    }
  },
  methods: {
    refreshRecom () {
      const self = this
      getRecom()
        .then(function(params) {
          this.listRecom
        })
    }
  }
}
</script>