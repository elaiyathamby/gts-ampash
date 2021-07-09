

<template>
  <!-- Default Input -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Aufgabenerfassung</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="form">
      <!-- Input with value -->

      <!-- Input with placeholder -->
      <ion-item>
        <ion-label position="floating">Titel</ion-label>
        <ion-input v-model="newTodo.title"></ion-input>
      </ion-item>

      <!-- Input with clear button when there is a value -->

      <ion-item>
        <ion-label position="floating">Beschreibung</ion-label>
        <ion-textarea v-model="newTodo.description"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label>Kategorie</ion-label>
        <ion-select v-model="newTodo.category" interface="popover">
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
          v-model="newTodo.due"
          display-format="D MMM YYYY"
          min="2021"
          max="2050"
        ></ion-datetime>
      </ion-item>

      <ion-button @click="addTodo" expand="block">Speichern</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { useTodos } from "@/composables/useTodos";
import {
  IonLabel,
  IonInput,
  IonItem,
  IonDatetime,
  IonTextarea,
  IonPage,
  IonContent,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonLabel,
    IonInput,
    IonItem,
    IonDatetime,
    IonTextarea,
    IonPage,
    IonContent,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonTitle,
  },
  data() {
    return {
      categories: ["PRIVATE", "BUSINESS", "OTHERS"],
    };
  },
  setup() {
    const { newTodo, addTodo } = useTodos();
    return { newTodo, addTodo };
  }
});
</script>