<template>
  <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Console DB
          </v-list-item-title>
          <v-list-item-subtitle>
            The Console Database
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'home', icon: 'mdi-home', link: { name: 'home' } },
                { title: 'consoles', icon: 'mdi-nintendo-game-boy', link: { name: 'consoles' } },
                { title: 'games', icon: 'mdi-gamepad', link: { name: 'games' } },
                { title: 'about', icon: 'mdi-information-outline', link: { name: 'about' } },
            ],
        };
    },

};
</script>

<style>

</style>
