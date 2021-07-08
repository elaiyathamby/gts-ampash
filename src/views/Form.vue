

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
    <ion-content>
      <ion-input></ion-input>

      <!-- Input with value -->

      <!-- Input with placeholder -->
      <ion-item>
        <ion-label position="floating">Titel</ion-label>
        <ion-input v-model="title"></ion-input>
      </ion-item>

      <!-- Input with clear button when there is a value -->

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
        <ion-label>Fälligkeitsdatum </ion-label>
        <ion-datetime
          v-model="datum"
          display-format="D MMM YYYY"
          min="2021"
          max="2030"
          value="2021-07-11"
        ></ion-datetime>
        <ion-select-option v-bind="datum"></ion-select-option>
      </ion-item>

      <ion-button @click="save" expand="block">Speichern</ion-button>
    </ion-content>
  </ion-page>

  <!-- speichern
--></template>

<script>
import { IonLabel, IonInput, IonItem, IonDatetime } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonLabel, IonInput, IonItem, IonDatetime },
  data() {
    return {
      title: "",
      beschreibung: "",
      categories: ["PRIVATE", "BUSINESS", "OTHERS"],
      category: "",
      datum: "",
    };
  },
  methods: {
    save() {
      //alert(this.datum.split('T')[0]);
    },
  },
});
</script>