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
        <ion-button v-bind:router-link="'/tabs/form'">Neue Aufgabe</ion-button>
      </div>

      <h4>Deine Koordinaten</h4>
      <p>Lat: {{ latitude }}</p>
      <p>Long: {{ longitude }}</p>

      <todos v-bind:tasks="tasks"></todos>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Geolocation } from "@capacitor/geolocation";
import Todos from "@/components/ToDos.vue";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    Todos
  },
  data() {
    return {
      tasks: [
        {
          date: "2021-06-05",
          titel: "test",
        },
        {
          date: "2021-06-05",
          titel: "App",
        },
        {
          date: "2021-06-08",
          titel: "Springen",
        },
      ],

      latitude: 0,
      longitude: 0,
      first: "",
    };
  },
  async mounted() {
    this.tasks = [...new Set(this.tasks.map((x) => x.date))].map((k) => ({
      date: k,
      todos: this.tasks.filter((x) => x.date == k).map((x) => x.titel),
    }));
    const coordinates = await Geolocation.getCurrentPosition();
    console.log(coordinates);
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  },
});
</script>


