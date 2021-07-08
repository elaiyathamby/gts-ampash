<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Task-Details for ID {{ id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label position="floating">Titel</ion-label>
        <ion-input v-model="title"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Beschreibung</ion-label>
        <ion-textarea v-model="beschreibung"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label>Kategorie</ion-label>
        <ion-select v-model="category" interface="popover">
          <ion-select-option
            :key="cat"
            v-for="cat in categories"
            v-bind:value="cat"
            >{{ cat }}</ion-select-option
          >
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label >Fälligkeitsdatum </ion-label>
        <ion-datetime
          v-model="datum"
          display-format="D MMM YYYY"
          min="2021"
          max="2030"
          value="2021-07-11"
        ></ion-datetime>
        <ion-select-option v-bind="datum"></ion-select-option>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Reflexion</ion-label>
        <ion-textarea v-model="reflexion"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label>Status</ion-label>
        <ion-select v-bind:value="status" interface="popover">
          <ion-select-option
            :key="sta"
            v-for="sta in statuss"
            v-bind:value="sta"
            >{{ sta }}</ion-select-option
          >
        </ion-select>
      </ion-item>
      <ion-button @click="save" expand="block">Speichern</ion-button>
    </ion-content>
    <ion-content>
      <ion-grid>
      <ion-row>
<ion-col>Fotogalerie</ion-col>
</ion-row>
</ion-grid>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- <ion-fab> markup  -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonContent,
  IonButtons,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonGrid
} from "@ionic/vue";
import { camera, trash, close } from "ionicons/icons";
import { useRoute } from "vue-router";
import { usePhotoGallery, UserPhoto } from "@/composables/usePhotoGallery";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonContent,
    IonButtons,
    IonFab,
    IonFabButton,
    IonIcon,
    IonImg,
    IonGrid
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const { photos, takePhoto } = usePhotoGallery();
    return { id, takePhoto, camera, trash, close ,photos};
  },
  data() {
    return {
      reflexion: "",
      statuss: ["OPEN", "INPROGRESS", "DONE"],
      categories: ["PRIVATE", "BUSINESS", "OTHERS"],
      status: "",
    };
  },
});
</script>


<style>
</style>