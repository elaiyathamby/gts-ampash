<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Task-Details for {{ todo.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label position="floating">Titel</ion-label>
        <ion-input v-model="todo.title"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Beschreibung</ion-label>
        <ion-textarea v-model="todo.description"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label>Kategorie</ion-label>
        <ion-select v-model="todo.category" interface="popover">
          <ion-select-option
            :key="cat"
            v-for="cat in categories"
            v-bind:value="cat"
            >{{ cat }}</ion-select-option
          >
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label>Fälligkeitsdatum </ion-label>
        <ion-datetime
          v-model="todo.due"
          display-format="D MMM YYYY"
          min="2021"
          max="2030"
          value="2021-07-11"
        ></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Reflexion</ion-label>
        <ion-textarea v-model="todo.reflexion"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label>Status</ion-label>
        <ion-select v-model="todo.status" interface="popover">
          <ion-select-option
            :key="sta"
            v-for="sta in statuss"
            v-bind:value="sta"
            >{{ sta }}</ion-select-option
          >
        </ion-select>
      </ion-item>
      <ion-button @click="updateTodo" expand="block">Speichern</ion-button>
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
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonGrid,
  IonTitle,
  IonSelect,
  IonDatetime,
  IonTextarea,
  IonItem,
  IonInput,
  IonLabel,
  IonRow,
  IonCol,
  IonSelectOption
} from "@ionic/vue";
import { camera, trash, close } from "ionicons/icons";
import { useRoute } from "vue-router";
import { usePhotoGallery } from "@/composables/usePhotoGallery";
import { useTodos } from "@/composables/useTodos";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonButton,
    IonContent,
    IonButtons,
    IonFab,
    IonFabButton,
    IonIcon,
    IonImg,
    IonGrid,
    IonTitle,
    IonSelect,
  IonDatetime,
  IonTextarea,
  IonItem,
  IonInput,
  IonLabel,
  IonRow,
  IonCol,
  IonSelectOption
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const { photos, takePhoto } = usePhotoGallery();
    const { todo, getTodoById, updateTodo } = useTodos();
    return { id, takePhoto, camera, trash, close, photos, todo, getTodoById ,updateTodo};
  },
  mounted() {
    this.getTodoById(this.id as any);
  },
  data() {
    return {
      statuss: ["OPEN", "INPROGRESS", "DONE"],
      categories: ["PRIVATE", "BUSINESS", "OTHERS"]
    };
  },
});
</script>


<style>
</style>