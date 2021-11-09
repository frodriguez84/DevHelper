<template>
  <div class="container">
    <button @click="toggleModal">Open Modal</button>
	     
  </div>
</template>

<script>


export default {
  name: "Resultado",
  components: {
    
  },
  data() {
    return {
      isShowModal: false
    };
  },

  methods: {
   toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
    
  },
};
</script>
