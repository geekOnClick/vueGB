<template>
  <div class="wrapper">
    <h1 class="header">Список платежей</h1>
    <button class="btn" @click="addNew = !addNew">Добавить платеж</button>
    <new-payment v-if="addNew" @add="addPayment" @close="this.addNew = false"/>
    <div class="payments">
      <div class="payment heading">
        <p class="text">#</p>
        <p class="text">Category</p>
        <p class="text">Date</p>
        <p class="text">Value</p>
      </div>
      <div class="payment hide" v-for="(item,i) in basicPayments" :key="i"
      :class="{
      'show': i+1 <= maxOpened * openedPage,
      }">
        <p class="text">{{ i+1 }}</p>
        <p class="text">{{ item.category }}</p>
        <p class="text">{{ item.date }}</p>
        <p class="text">{{ item.value }}</p>
      </div>
    </div>
      <div class="pagination_wrapper">
    <div class="pagination" v-for="pageNumber in countPages" :key="pageNumber" @click="changeApps(openedPage = pageNumber)"
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

import NewPayment from './components/NewPayment'
export default {
  components: {
    NewPayment
  },
  data() {
    return {
      addNew: false,
      total_pages: 1,
      openedPage: 1,
      maxOpened: 4,
      basicPayments: [
      {
        date: '28.03.2020',
        category: 'Food',
        value: 169,
      },
      {
        date: '24.03.2020',
        category: 'Transport',
        value: 360,
      },
      {
        date: '24.03.2020',
        category: 'Food',
        value: 532,
      },
      {
        date: '28.03.2020',
        category: 'Food',
        value: 169,
      },
      {
        date: '24.03.2020',
        category: 'Transport',
        value: 360,
      },
      {
        date: '24.03.2020',
        category: 'Food',
        value: 532,
      },
      
    ]
    }
  },
  computed: {
    countPages(){
      return this.total_pages = Math.ceil(this.basicPayments.length / 4)
    }
  },
  methods: {
      addPayment(data) {
        this.addNew = false;
        this.basicPayments.push(data)
      },
      changeApps(pageNumber){
       this.page = pageNumber
       this.pack += 4
     }
  },
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
</style>
