<template>
  <Div>
    <Header />
    <Home />
    <About />
    <Contact />
    <Users />
  </Div>
</template>
<script>
  import Home from './components/Home.vue';
  import About from './components/About.vue';
  import Contact from './components/Contact.vue';
  import Users from "./components/Users.vue";
  import Header from "./components/includes/Header.vue";
import HeaderVue from './components/includes/Header.vue';
  export default {
    name:'App',
    components: {
      Header,
      Home,
      About,
      Contact,
      Users
    }
  }
</script>
