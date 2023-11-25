<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Signup</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-item>
          <ion-input label ='Username' v-model="username" type="text"></ion-input>
        </ion-item>
  
        <ion-item>
          <ion-input label = 'Password' v-model="password" type="password"></ion-input>
        </ion-item>

        <ion-item>
          <ion-input label = 'Full Name' v-model="name" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-datetime v-model="birthday"></ion-datetime>
          <!-- <ion-input label = 'Birthday' v-model="birthday" type="text"></ion-input> -->
        </ion-item>

        <ion-item>
          <ion-input label = 'Height' v-model="height" type="number"></ion-input>
        </ion-item>

        <ion-item>
          <ion-input label = 'Weight' v-model="weight" type="number"></ion-input>
        </ion-item>
  
        <ion-button expand="full" @click="signUp">Signup</ion-button>
      </ion-content>
    </ion-page>
</template>
  
<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonDatetime } from '@ionic/vue';
import { defineComponent } from 'vue';

import { registerUser } from './js/register.js'
import { useRouter } from 'vue-router';
const router = useRouter()
router.isReady()
const {username, password, birthday, name, height, weight, signUp} = registerUser(router)
</script>
