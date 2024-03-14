import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const modalVaue = reactive({
    open: false,
  });

  //   const toggleModal = () => {
  //     open.value = !open.value;
  //   };

  const openModal = () => {
    modalVaue.open = true;
  };
  const closeModal = () => {
    modalVaue.open = false;
  };

  return { modalVaue, openModal, closeModal };
});
