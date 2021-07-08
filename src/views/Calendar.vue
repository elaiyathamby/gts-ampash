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
        <ion-button router-link="/tabs/form">Neue Aufgabe</ion-button>
      </div>

      <h4>Deine Koordinaten</h4>
      <p>Lat: {{ latitude }}</p>
      <p>Long: {{ longitude }}</p>

      <ion-item-group v-bind:key="task" v-for="task in tasks">
        <ion-item-divider>
          <ion-label>{{ task.date }}</ion-label>
        </ion-item-divider>

        <ion-item
          button
          v-bind:router-link="'/tabs/calendar/' + todo"
          v-bind:key="todo"
          v-for="todo in task.todos"
        >
          <ion-label>{{ todo }}</ion-label>
        </ion-item>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Geolocation } from "@capacitor/geolocation";

export default defineComponent({
  components: {
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonLabel,
    IonPage,
    IonContent,
    IonButton,
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


