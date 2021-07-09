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
        <ion-button v-bind:router-link="'/tabs/questionone'" expand="block"
          >Neue Aufgabe</ion-button
        >
      </div>
      <ion-grid>
        <ion-row>
          <ion-col>Deine Koordinaten</ion-col>
          <ion-col>Lat: {{ latitude }}</ion-col>
          <ion-col>Long: {{ longitude }}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-searchbar v-model="title" show-cancel-button="never"></ion-searchbar>
          </ion-col>
          <ion-col>
            <ion-item>
              <ion-label>Status</ion-label>
              <ion-select
                v-model="status"
                interface="popover"
              >
                <ion-select-option
                  :key="sta"
                  v-for="sta in statuss"
                  v-bind:value="sta"
                  >{{ sta }}</ion-select-option
                >
              </ion-select>
            </ion-item>
          </ion-col>
          <ion-col>
            <ion-item>
              <ion-label>Kategorie</ion-label>
              <ion-select
                v-model="category"
                interface="popover"
              >
                <ion-select-option
                  :key="cat"
                  v-for="cat in categories"
                  v-bind:value="cat"
                  >{{ cat }}</ion-select-option
                >
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
          <div id="container">
            <ion-button v-on:click="filter" expand="block">
              Filtern
            </ion-button>
          </div>
          </ion-col>
        </ion-row>
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
  IonSearchbar,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonItem,
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
    IonSearchbar,
    IonLabel,
    IonSelectOption,
    IonItem,
    IonSelect,
  },
  data() {
    return {
      latitude: 0,
      longitude: 0,
      statuss: ["OPEN", "INPROGRESS", "DONE", ""],
      categories: ["PRIVATE", "BUSINESS", "OTHERS", ""],
      status: "",
      category: "",
      title: ""
    };
  },
  async mounted() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  },
  setup() {
    const { orderedTodo, getTodos, getFilterTodos } = useTodos();
    return { orderedTodo, getTodos, getFilterTodos };
  },
  methods: {
    filter() {
      let filterstring = "";
      if(this.title != "") filterstring += "title="+this.title+"&";
      if(this.status != "") filterstring += "status="+this.status+"&";
      if(this.category != "") filterstring += "category="+this.category;
      this.getFilterTodos(filterstring);
    }
  }
});
</script>


