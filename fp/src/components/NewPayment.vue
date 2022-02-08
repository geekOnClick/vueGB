<template>
    <div class="modal">
        <p @click="$router.push('/')">X</p>
        <input type="text" placeholder="Payment description" v-model="data.category">
        <input type="text" placeholder="Payment ammount" v-model="data.value">
        <input type="text" placeholder="Payment date" v-model="data.date">
        <button class="btn" @click="makeAction">{{ btnText }}</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        emits: ['add'],
        data() {
            return {
                params: "",
                identificator: this.$route.params.id,
                btnText: this.$route.params.text === undefined ? "Добавить платеж" : this.$route.params.text,
                data: {
                    category: this.$route.params.category,
                    value: this.$route.params.value,
                    date: this.$route.params.date
                }
            }
        },
        methods: {
    ...mapMutations('postStore', ['addItem', 'editItem']),
            add(){
                if(this.data.category && this.data.value && this.data.date) {
                    this.addItem(this.data)
                    this.$router.push('/')
                }
            },
            edit(){
                this.editItem({
                    id: this.identificator,
                    category: this.data.category,
                    value: this.data.value,
                    date: this.data.date
                })
                this.$router.push('/')
            },
            makeAction(){
                if(this.$route.params.value === undefined) {
                    this.edit()
                }
                else {
                    this.add()
                }
            }
        },
        created() {
            console.log(this.$route);
            this.data.category = this.$route.params.category
            // this.data.value = this.$route.query.value
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