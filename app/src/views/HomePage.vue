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
      
      <div>
        <ion-title size="large">Muscle</ion-title>
      </div>

      <div>
        <ion-title size="large">Difficulty</ion-title>
        <ion-radio-group value="beginner">
          <ion-radio value="beginner" label-placement="end" class="radio-choices">Beginner</ion-radio><br />
          <ion-radio value="intermediate" label-placement="end" class="radio-choices">Intermediate</ion-radio><br />
          <ion-radio value="expert" label-placement="end" class="radio-choices">Expert</ion-radio><br />
        </ion-radio-group>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/vue';

const type = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching', 'strongman'];
const muscle = ['abdominals',  'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'];
const difficulty = ['beginner', 'intermediate', 'expert'];

let urlExercise = `https://api.api-ninjas.com/v1/exercises?type=${type[0]}&?muscle=${muscle[7]}&?difficulty${difficulty[0]}`;

async function getExercise(url = urlExercise) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
  });
  return response.json();
}
console.log(getExercise());

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
