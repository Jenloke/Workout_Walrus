<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div> -->
      
      <ion-item>
        <ion-select label="Type" label-placement="fixed" placeholder="Cardio">
          <ion-select-option value="cardio">Cardio</ion-select-option>
          <ion-select-option value="olympic_weightlifting">Olympic Weightlifting</ion-select-option>
          <ion-select-option value="plyometrics">Plyometrics</ion-select-option>
          <ion-select-option value="powerlifting">Powerlifting</ion-select-option>
          <ion-select-option value="strength">Strength</ion-select-option>
          <ion-select-option value="stretching">Stretching</ion-select-option>
          <ion-select-option value="strongman">Strongman</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-select 
          label="Muscle" 
          label-placement="fixed" 
          placeholder="Select One" 
          @ion-change="console.log(a($event.detail.value))"
        >
          <IonSelectOption value="asd">ASD</IonSelectOption>
          <ion-select-option v-for="x in muscles" :key="x.value" value="{{ x.value }}">
            {{ x.name }}
          </ion-select-option>
        </ion-select>
      </ion-item>

      <List/>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { IonItem, IonSelect, IonSelectOption } from '@ionic/vue';
// import { IonRadio, IonRadioGroup } from '@ionic/vue';
// import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';

import List from './List.vue';
import { muscles } from '../selection/types';
import { vModelCheckbox, vModelDynamic } from 'vue';

let a = (x) => {
  console.log(x)
  return x;
};

console.log(a);

// let urlExercise = `https://api.api-ninjas.com/v1/exercises?type=${type[0]}&?muscle=${muscles[7]}&?difficulty${difficulty[0]}`;
async function getExercise(url = urlExercise) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
  });
  return response.json();
}
// console.log(getExercise());

// async function getUsers(url = "http://localhost:3000/users") {
//   const response = await fetch(url);
//   return response.json();
// }
// console.log(getUsers());
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
