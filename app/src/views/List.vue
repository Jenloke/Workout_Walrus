<!-- <template>
    <ion-page></ion-page>
    <ion-list>
      <ion-item>
        <ion-select
          aria-label="Fruit"
          placeholder="Select fruit"
          @ionChange="handleChange($event)"
          @ionCancel="handleCancel()"
          @ionDismiss="handleDismiss()"
        >
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>
  </template>
  
  <script setup lang="ts">
    import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
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
  </script> -->

  <template>
    <ion-page>
      <ion-content>
        <ion-item>
          <ion-label>Select an option:</ion-label>
          <ion-select v-model="selectedOption" @ionChange="handleOptionChange">
            <ion-select-option value="option1">Option 1</ion-select-option>
            <ion-select-option value="option2">Option 2</ion-select-option>
            <ion-select-option value="option3">Option 3</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Selected option:</ion-label>
          <ion-note>{{ selectedOption }}</ion-note>
        </ion-item>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: null,
      };
    },
    methods: {
      handleOptionChange(event) {
        console.log('Selected option:', event.detail.value);
        // You can perform additional actions here if needed
      },
    },
  };
  </script>
  