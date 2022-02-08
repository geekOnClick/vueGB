<template>
    <div class='wrap' :class="{ show: side }">
        <a href="#" @click="editI">&#128736; <span class="word">Редактировать</span></a>
        <a href="#" @click="deleteI">&#128465; <span class="word">Удалить</span></a>
    </div>
</template>
<script>
export default {
    props: ['side'],
    data() {
        return {};
    },
    methods: {
        deleteI(){
            this.$emit('delete')
        },
        editI(){
            this.$emit('edit')
        }
    },
};
</script>
<style scoped>
.wrap {
    width: 200px;
    height: 60px;
    background-color: #fff;
    position: absolute;
    right: -188px;
    display: none;
}
.show {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.word:hover {
      border-bottom: 1px solid black;
  }
</style>
