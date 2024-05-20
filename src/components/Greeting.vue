<template>
    <div>
      <h3>{{ greeting }}! Thank you for visiting!</h3>
      <button @click="generateRandomGreeting">
        New Greeting
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    messages: Array
  });
  
  const greeting = ref(props.messages[0]);
  
  function generateRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * props.messages.length);
    greeting.value = props.messages[randomIndex];
  }
  </script>