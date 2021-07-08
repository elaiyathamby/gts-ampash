<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Kalender</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <ion-button v-bind:router-link="'/tabs/form'" expand="block"
          >Neue Aufgabe</ion-button
        >
      </div>

      <ion-grid>
        <ion-row>
          <ion-col>Deine Koordinaten</ion-col>
          <ion-col>Lat: {{ latitude }}</ion-col>
          <ion-col>Long: {{ longitude }}</ion-col>
        </ion-row>

        <ion-searchbar show-cancel-button="never"></ion-searchbar>
      </ion-grid>
      <todos v-bind:tasks="orderedTodo"></todos>
    </ion-content>
  </ion-page>
</template>
<script>
import { useTodos } from "@/composables/useTodos";
import { defineComponent } from "vue";
import { Geolocation } from "@capacitor/geolocation";
import Todos from "@/components/ToDos.vue";
import {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle,
  IonRow,
  IonCol,
  IonGrid,
  IonSearchbar
} from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonHeader,
    Todos,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonTitle,
    IonRow,
    IonCol,
    IonGrid,
    IonSearchbar
  },
  data() {
    return {
      latitude: 0,
      longitude: 0,
    };
  },
  async mounted() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  },
  setup() {
    const { orderedTodo } = useTodos();
    return { orderedTodo };
  },
});
</script>


