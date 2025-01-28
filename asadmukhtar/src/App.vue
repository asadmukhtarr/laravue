<template>
  <Div>
    <Header />
    <router-view></router-view>
  </Div>
</template>
<script>

  import Header from "./components/includes/Header.vue";
import HeaderVue from './components/includes/Header.vue';
  export default {
    name:'App',
    components: {
      Header,
    }
  }
</script>
