<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn color="white" plain raised to="/">Dashboard</v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <h1 class="text-h1 text-sm-h2 mb-5 text-center pa-10">My personal payments</h1>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
color {
  color: rgb(1, 153, 158);
}
</style>