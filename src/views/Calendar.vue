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
      <todos v-bind:tasks="orderedTodo"></todos>
    </ion-content>
  </ion-page>
</template>
<script>
import { useTodos } from "@/composables/useTodos"
import { defineComponent } from "vue";
import { Geolocation } from "@capacitor/geolocation";
import Todos from "@/components/ToDos.vue";
import { IonPage ,IonContent, IonButton,IonHeader,IonToolbar,IonBackButton , IonButtons , IonTitle} from "@ionic/vue";

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
  },
  data() {
    return {
      tasks: [],
      latitude: 0,
      longitude: 0
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


