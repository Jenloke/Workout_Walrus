<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Workout Walrus</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <h1 class="ion-padding"><strong>Exercise Calculator</strong></h1>

      <ion-list :inset="true">
        <ion-item>
          <ion-select aria-label="Exercise" interface="popover" placeholder="Select exercise">
            <ion-select-option value="Push-ups">Push-ups</ion-select-option>
            <ion-select-option value="Sit-ups">Sit-ups</ion-select-option>
            <ion-select-option value="Jumping Jacks">Jumping Jacks</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-button shape="round">Calculate</ion-button>
        </ion-item>
      </ion-list>

      <h2 class="ion-text-center">0 calories / min</h2>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonList, IonItem } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
