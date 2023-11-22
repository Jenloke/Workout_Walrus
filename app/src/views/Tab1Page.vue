<template>
  <!-- <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu> -->
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        
        <ion-title class="ion-text-justify">Workout Walrus</ion-title>
        <!-- <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons> -->
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1 class="ion-padding"><strong>Exercises</strong></h1>

      <ion-list :inset="true">
        <ion-item>
          <ion-select 
            label="Types" 
            label-placement="fixed" 
            placeholder="Select One" 
            @ion-change="paraExe[0]=$event.detail.value"
          >
            <ion-select-option v-for="(x, index) in types" :key="index" :value="x.value">
              {{ x.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-select 
            label="Muscle" 
            label-placement="fixed" 
            placeholder="Select One" 
            @ion-change="paraExe[1]=$event.detail.value"
          >
            <ion-select-option v-for="(x, index) in muscles" :key="index" :value="x.value">
              {{ x.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-select 
            label="Difficulties" 
            label-placement="fixed" 
            placeholder="Select One" 
            @ion-change="paraExe[2]=$event.detail.value"
          >
            <ion-select-option v-for="(x, index) in difficulties" :key="index" :value="x.value">
              {{ x.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>
        
        <ion-item id="button-generate-exercise" class="asd">
          <!-- <ion-button v-on:click="getExercise(`https://api.api-ninjas.com/v1/exercises?type=${paraExe[0]}&?muscle=${paraExe[1]}&?difficulty${paraExe[2]}`)">  -->
          <ion-button v-on:click="getExercise(`https://api.api-ninjas.com/v1/exercises?type=${paraExe[0]}&?difficulty${paraExe[2]}`)"> 
            Generate Exercise
          </ion-button>
        </ion-item> 
      </ion-list>

      <ion-list :inset="true">
        <ion-item>
          <ion-label>Push-ups</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Sit-ups</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Lunges</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Squats</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Plank</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {IonButton} from '@ionic/vue';

import { IonSelect, IonSelectOption } from '@ionic/vue';

import { types, muscles, difficulties } from '../selection/types';

const paraExe = [ '', '', ''];

async function getExercise(url) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
  });
  console.log(response.json());
  // return response.json();
}
</script>

<style>
  ion-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>