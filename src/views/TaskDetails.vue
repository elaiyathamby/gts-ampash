<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <p>Task-Details for ID {{ id }}</p>

<!-- <ion-input clear-input value="Status"></ion-input>



          <ion-item>
          <ion-label>Auswahl Status</ion-label>
          <ion-select interface="popover">
            <ion-select-option value="off">Offen</ion-select-option>
            <ion-select-option value="bea">In Bearbeitung</ion-select-option>
            <ion-select-option value="don">Done</ion-select-option>
          </ion-select>
        </ion-item> 
        
        
  <ion-item>
    <ion-label position="floating">Reflexion</ion-label>
    <ion-textarea></ion-textarea>
  </ion-item>

        -->


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonHeader, IonToolbar, IonBackButton, IonContent, IonButtons } from "@ionic/vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonBackButton, IonContent, IonButtons },
  setup() {
    const route = useRoute();
    const { id } = route.params;

    return { id };
  },
});



</script>


<style>
</style>