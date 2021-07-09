

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
    <ion-content id="questions">
      <p>Hat die Aufgabe etwas mit Dir zutun?</p>
      <ion-button @click="weiter">Ja</ion-button>
      <ion-button @click="done">Nein</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonTitle,
  },
  data() {
    return {
      router: "",
    };
  },
  mounted() {
    this.router = useRouter();
  },
  methods: {
    weiter() {
      this.router.push("/tabs/questiontwo");
    },
    done() {
      alert("Dann musst du diese Aufgabe nicht erfassen!");
      this.router.push("/tabs/calendar");
    },
  },
});
</script>