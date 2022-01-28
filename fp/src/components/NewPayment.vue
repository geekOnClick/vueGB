<template>
    <div class="modal">
        <p @click="close">X</p>
        <input type="text" placeholder="Payment description" v-model="data.category">
        <input type="text" placeholder="Payment ammount" v-model="data.value">
        <input type="text" placeholder="Payment date" v-model="data.date">
        <button class="btn" @click="add">Добавить платеж</button>
    </div>
</template>

<script>
    export default {
        emits: ['add', 'close'],
        data() {
            return {
                data: {
                    category: "",
                    value: "",
                    date: ""
                }
            }
        },
        methods: {
            add(){
                if(this.data.category && this.data.value && this.data.date) {
                    this.$emit('add', this.data)
                }
            },
            close(){
                this.$emit('close')
            }
        },
    }
</script>

<style  scoped>
.modal {
    width: 300px;
    height: 200px;
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
}
button {
    margin-top: 20px;
}
input {
    display: flex;
    justify-content: space-between;
    border: none;
    border-bottom: 1px solid #000;
    min-height: 40px;
    position: relative;
}
p {
    position: absolute;
    right: 30px;
    top: 0px;
    cursor: pointer;
}

</style>