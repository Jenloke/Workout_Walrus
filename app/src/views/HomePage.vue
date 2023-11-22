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

      <ion-list>
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
        
        <ion-button v-on:click="getExercise(`https://api.api-ninjas.com/v1/exercises?type=${paraExe[0]}&?muscle=${paraExe[1]}&?difficulty${paraExe[2]}`)"> 
          Test
        </ion-button>

        <!-- <List /> -->
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
import { IonButton } from '@ionic/vue'
// import { IonRadio, IonRadioGroup } from '@ionic/vue';

// import List from './List.vue';
import { types, muscles, difficulties } from '../selection/types';

const paraExe = [ '', '', ''];

// let urlExercise = `https://api.api-ninjas.com/v1/exercises?type=${type[0]}&?muscle=${muscles[7]}&?difficulty${difficulty[0]}`;
async function getExercise(url = urlExercise) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
  });
  console.log(response.json());
  // return response.json();
}
// console.log(getExercise());

// for

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
