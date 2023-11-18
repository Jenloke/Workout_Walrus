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
        <!-- const type = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching', 'strongman']; -->
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

      <!-- <ion-title size="large">Muscle</ion-title> -->
      <ion-item>
        <!-- const muscle = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps']; -->
        <ion-select label="Muscle" label-placement="fixed" placeholder="Select One">
          <ion-select-option value="abdominals">Abdominals</ion-select-option>
          <ion-select-option value="abductors">Abductors</ion-select-option>
          <ion-select-option value="adductors">Adductors</ion-select-option>
          <ion-select-option value="biceps">Biceps</ion-select-option>
          <ion-select-option value="calves">Calves</ion-select-option>
          <ion-select-option value="chest">Chest</ion-select-option>
          <ion-select-option value="forearms">Forearms</ion-select-option>
          <ion-select-option value="glutes">Glutes</ion-select-option>
          <ion-select-option value="hamstrings">Hamstrings</ion-select-option>
          <ion-select-option value="lats">Lats</ion-select-option>
          <ion-select-option value="lower_back">Lower Back</ion-select-option>
          <ion-select-option value="middle_back">Middle Back</ion-select-option>
          <ion-select-option value="neck">Neck</ion-select-option>
          <ion-select-option value="quadriceps">Quadriceps</ion-select-option>
          <ion-select-option value="triceps">Triceps</ion-select-option>
        </ion-select>
      </ion-item>

      <!-- <ion-list>
        <ion-item>
          <ion-select 
            label="Difficulty" 
            label-placement="fixed" 
            placeholder="Beginner"
            @ionChange="handleChange($event)"
          >
            <ion-select-option value="beginner">Beginner</ion-select-option>
            <ion-select-option value="intermediate">Intermediate</ion-select-option>
            <ion-select-option value="expert">Expert</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list> -->

      <ion-list>
        <ion-item>
          <ion-select
            aria-label="Fruit"
            placeholder="Select fruit"
            @ionChange="handleChange($event)"
          >
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <!-- <ion-item>
        <ion-title size="large">Difficulty</ion-title>
        <ion-radio-group value="beginner">
          <ion-radio value="beginner" label-placement="end" class="radio-choices">Beginner</ion-radio><br />
          <ion-radio value="intermediate" label-placement="end" class="radio-choices">Intermediate</ion-radio><br />
          <ion-radio value="expert" label-placement="end" class="radio-choices">Expert</ion-radio><br />
        </ion-radio-group>
      </ion-item> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { IonRadio, IonRadioGroup } from '@ionic/vue';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
// import { IonItem, IonSelect, IonSelectOption } from '@ionic/vue';

import { defineComponent } from 'vue';

// const type = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching', 'strongman'];
const type = ['cardio', 'plyometrics', 'powerlifting', 'strength', 'stretching'];
// const muscle = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'];
const muscle = ['abdominals', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'triceps'];
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
// console.log(getExercise());

// async function getUsers(url = "http://localhost:3000/users") {
//   const response = await fetch(url);
//   return response.json();
// }
// console.log(getUsers());

defineComponent({
  components: { IonItem, IonList, IonSelect, IonSelectOption },
  methods: {
    handleChange(ev: any) {
      console.log('ionChange fired with value: ' + ev.detail.value);
    },
    handleCancel() {
      console.log('ionCancel fired');
    },
    handleDismiss() {
      console.log('ionDismiss fired');
    }
  }
})

defineComponent({
    components: { IonItem, IonList, IonSelect, IonSelectOption },
    methods: {
      handleChange(ev: any) {
        console.log('ionChange fired with value: ' + ev.detail.value);
      },
      handleCancel() {
        console.log('ionCancel fired');
      },
      handleDismiss() {
        console.log('ionDismiss fired');
      },
    },
  });

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
