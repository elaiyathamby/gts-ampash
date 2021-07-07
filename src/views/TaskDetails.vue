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

  <ion-item>
    <ion-label>Titel</ion-label>
  </ion-item>

  <ion-item>
    <ion-label >Beschreibung</ion-label>

  </ion-item>



  <ion-item>
  <ion-label>Kategorie</ion-label>
  </ion-item>



<ion-item>
  
  <ion-label>Fälligkeitsdatum </ion-label>
 
</ion-item>


  <ion-item>
    <ion-label position="floating">Reflexion</ion-label>
    <ion-input v-model="Reflexion"></ion-input>
  </ion-item>


          <ion-item>
          <ion-label>Status</ion-label>
          <ion-select v-model="status" interface="popover">
            <ion-select-option :key="sta" v-for="sta in statuss" v-bind:value="sta">{{ sta }}</ion-select-option>
          </ion-select>
        </ion-item>



<ion-button @click="save" expand="block">Speichern</ion-button>


<p>Fotogalerie</p>

<ion-content :fullscreen="true">
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button @click="takePhoto()">
      <ion-icon :icon="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonHeader, IonToolbar, IonBackButton, IonContent, IonButtons, IonFab, IonFabButton, IonIcon
        } from "@ionic/vue";
        import { camera, trash, close } from 'ionicons/icons';
import { useRoute } from "vue-router";
import { usePhotoGallery } from '@/composables/usePhotoGallery';


export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonBackButton, IonContent, IonButtons, IonFab, IonFabButton,
        IonIcon },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const { takePhoto } = usePhotoGallery();
    return { id, takePhoto, camera, trash, close };

  },
    data(){
    return {
      reflexion: "",
      statuss: ["Offen","In Bearbeitung","Erledigt"],
      status: ""

    }}
});



</script>


<style>
</style>