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

      <ion-list :inset="true">
        <ion-item>
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>{{username}}</ion-label>
        </ion-item>
        <!-- <ion-item>
          <ion-label>User Information</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Recent Activity</ion-label>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>
        </ion-item> -->
      </ion-list>

      <ion-list lines="none" :inset="true">
        <ion-item>
          <ion-label><strong><h1>User Information</h1></strong></ion-label>
        </ion-item>
        <ion-item>
          <ion-label>{{height}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>{{weight}}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>BMI</ion-label>
        </ion-item>
        <ion-item>
          <ion-button>Update</ion-button>
        </ion-item>
      </ion-list>
      
      <ion-list lines="none" :inset="true">
        <ion-item>
          <ion-label><strong><h1>Recent Activity</h1></strong></ion-label>
        </ion-item>
        <ion-item>
          <ion-card>
            <ion-card-content>
              The quick brown fox jumped over the lazy dog.
            </ion-card-content>
          </ion-card>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script>
import tab2 from './Tab2Page.js'
import { IonButton, IonAvatar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonCard, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  ...tab2,
}


</script>
