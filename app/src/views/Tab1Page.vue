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
</script>
