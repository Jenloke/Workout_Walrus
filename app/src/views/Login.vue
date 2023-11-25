<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-item>
          <ion-input label ='Username' v-model="username" type="text"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-input label = 'Password' v-model="password" type="password"></ion-input>
        </ion-item>
  
        <ion-button expand="full" @click="authenticateUser">Login</ion-button>
      </ion-content>
    </ion-page>
</template>
  
<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

import { loginAuthentication } from './js/Login.js'
import { useRouter } from 'vue-router';
const router = useRouter()
router.isReady()
const { username, password, authenticateUser } = loginAuthentication(router)
</script>
