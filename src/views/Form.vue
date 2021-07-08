

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
    <ion-content id="questions">
      <p>Hat die Aufgabe etwas mit Dir zutun?</p>
      <ion-button @click="addTodo">Ja</ion-button>
      <ion-button @click="addTodo">Nein</ion-button>
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
import { useRouter } from 'vue-router';
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
  },
  mounted() {
    const router = useRouter();
    if (confirm("Hat die Aufgabe etwas mit Dir zutun?")) {
      if(confirm("Kannst du diese Aufgabe innerhalb von zwei Minuten erledigen?")){
        alert("Dann erledige sie sofort!");
        router.push('/tabs/calendar');
      } 
    } else {
      // Do nothing!
      alert("Dann musst du diese Aufgabe nicht erfassen!");
      router.push('/tabs/calendar');
    }
  },
});
</script>