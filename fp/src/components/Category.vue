<template>
<div class="payment1">
        <p class="text">{{ i+1 }}</p>
        <p class="text">{{ item.category }}</p>
        <p class="text">{{ item.date }}</p>
        <p class="text">{{ item.value }}</p>
        <p class="text point" @click="showSideMenu">&#9776;</p>
         <transition name="fade">
        <Modal v-if="sideMenuVisible" :side="sideMenuVisible" class="side" @delete='deleteItem' @edit="$router.push({ name: 'newPayment', params: { id: i, category: item.category, value: item.value, date: item.date, text: 'Внести изменения'} })" />
         </transition>
</div>
</template>
<script>
import Modal from './UI/Modal.vue'
export default {
props: ['item', 'i'],
components: {
    Modal
  },
    data() {
        return {
      sideMenuVisible: false,
        };
    },
    methods: {
    showSideMenu(){
       this.sideMenuVisible = !this.sideMenuVisible
     },
     deleteItem(){
            this.$emit('delete', this.i)
            this.sideMenuVisible = !this.sideMenuVisible
        },
    
    },
};
</script>
<style scoped>
.payment1 {
    display: flex;
    justify-content: space-between;
    min-height: 40px;
    width: 700px;
    position: relative;
}
 .text {
    color: burlywood;
    width: 74px;
    text-align: left;
  }
  .point {
      position: absolute;
      right: -56px;
      cursor: pointer;
  }
  .side {
      position: absolute;
      right: -210px;
    background-color: burlywood;
    border-radius: 20px;
  }
  .fade-enter .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
