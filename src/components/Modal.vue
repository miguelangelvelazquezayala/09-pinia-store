<template>
  <Teleport to="body">
    <div class="modal">
      <h1>Products</h1>
      <hr />
      <div class="content" >
        <CartContent />
      </div>
      <hr />
      <button @click="closeModal">Close</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from "vue";
import CartContent from "./CartContent.vue";
import { useModalStore } from "../stores/modal.store";

const { closeModal } = useModalStore();
</script>

<style scoped>
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 800px;
  height: 500px;
  background-color: #333;
  border-radius: 8px;
  padding: 1rem;
  color: white;
}

.content {
  overflow: scroll;
  height: 400px;
}

button {
  width: 100%;
  font-size: 1rem;
  margin-top: 0.5rem;
  background-color: tomato;
  padding: 0.2rem;
}
</style>
