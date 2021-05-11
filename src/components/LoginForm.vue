<template>
    <div class="login">
        <div class="user" v-if="user">
            <img class="nes-avatar is-large" style="image-rendering: pixelated;" :src="user.photoURL" alt="photo" />
            <p>Logged in as {{ user.displayName }}</p>
            <button class="nes-btn is-success" @click="logout">Logout</button>
        </div>
        <form @submit.prevent="login" v-else>
            <input class="nes-input" type="text" name="email" id="email" v-model.trim="email" />
            <input class="nes-input" type="password" name="password" id="password" v-model.trim="password" />
            <input class="nes-btn is-success" type="submit" value="Login" />
        </form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { auth } from "../plugins/firebase";
import firebase from "firebase/app";

export default Vue.extend({
    name: "LoginForm",
    data() {
        return {
            user: null as firebase.User | null,
            email: "",
            password: ""
        };
    },
    methods: {
        login() {
            auth.signInWithEmailAndPassword(this.email, this.password)
                .then(userCredential => {
                    this.user = userCredential.user;
                })
                .catch(err => console.error(err));
        },
        logout() {
            auth.signOut();
            this.user = null;
        }
    },
    created() {
        this.user = auth.currentUser;
    }
});
</script>

<style>
form {
    width: 200px;
}
</style>
