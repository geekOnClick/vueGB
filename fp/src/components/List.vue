<template>
<div class="wrapper">
    <h1 class="header">Список платежей</h1>
    <button class="btn" @click="$router.push('/add/payment')">Добавить платеж</button>
    <new-payment v-if="addNew"  />
    <div class="payments">
      <div class="payment heading">
        <p class="text">#</p>
        <p class="text">Category</p>
        <p class="text">Date</p>
        <p class="text">Value</p>
      </div>
      <div class="payment hide" v-for="(item,i) in paymentList" :key="i"
      :class="{
      'show': i+1 <= maxOpened * openedPage,
      }">
        <Category :item='item' :i='i' @delete='deleteFromStore(i)' />
        <!-- <p class="text">{{ i+1 }}</p>
        <p class="text">{{ item.category }}</p>
        <p class="text">{{ item.date }}</p>
        <p class="text">{{ item.value }}</p>
        <p class="text point" @click="showSideMenu">&#9776;</p> -->
      </div>
    </div>
      <div class="pagination_wrapper">
    <div class="pagination" v-for="(pageNumber, i) in listNumber" :key="pageNumber" @click="changeApps(pageNumber, i+1)"
    :class="{
      'page': openedPage === pageNumber
    }"
    >
      {{ pageNumber }}
    </div>
    </div>
  </div>
</template>
<script>
import NewPayment from './NewPayment'
import Category from './Category'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    NewPayment,
    Category
  },
  data() {
    return {
      addNew: false,
      total_pages: 1,
      openedPage: 1,
      maxOpened: 4,
      sideMenuVisible: false
    }
  },
  computed: {
    ...mapGetters('postStore', ['paymentList', 'listNumber'] ),
  },
  methods: {
    ...mapActions('postStore', ['loadPayments', 'deleteAction']),
      changeApps(pageNumber, i){
       this.openedPage = pageNumber
       this.loadPayments(`page${i}`)
     },
     deleteFromStore(i) {
       this.deleteAction(i)
     }
  },
  created(){
    this.loadPayments('page1')
  }
}
</script>
<style scoped>
.header {
    color: pink;
    text-align: center;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .payments {
    margin-top: 40px;
    width: 600px;
    min-height: 70px;
  }
  .payment {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    min-height: 40px;
  }
   .text {
    color: burlywood;
    width: 60px;
  }
  .heading {
    font-weight: bold;
  }
  .pagination_wrapper {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 50px;
    min-width: 100px;
}
  .pagination {
    color: whitesmoke;
    width: 15px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .page {
    color: maroon;
  }
  .hide {
    display: none; 
  }
  .show {
    display: flex;
  }
  .point {
    cursor: pointer;
  }
</style>