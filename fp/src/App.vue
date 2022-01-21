<template>
    <div id="app">
        <h2>Мини-калькулятор</h2>
        <div class="calc">
            <input
                type="text"
                v-model="firstNum"
                placeholder="Введите первое число"
                autofocus
                @input="checkInput"
            />
            <div class="calculation">
                <select
                    class="select"
                    name="operation"
                    @change="saveOperation"
                    v-if="firstNum !== null"
                >
                    <option selected>oper</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="**">**</option>
                </select>
                <p v-if="this.firstNum.length !== 0 &&
                this.secondNum.length !== 0">=</p>
                <p v-if="this.firstNum.length !== 0 &&
                this.secondNum.length !== 0">
                    {{ result }}
                </p>
            </div>
            <input
                type="text"
                v-model="secondNum"
                v-if="operation !== null"
                :autofocus="operation"
                placeholder="Введите второе число"
                @input="checkInput"
            />
        </div>
        <div class="keyboard">
        <div class="btn" v-for="(item, i) in numbers" :key="i" @click="pushNum">
            {{ i }} 
        </div>
        <div class="btn" @click="del">&larr;</div>
        </div>
        <div class="selector">
            <input type="radio" name="selector" id="1btn" value="Первое поле" @click="changeField(1)" checked>
            <label for="1btn">Первое поле</label>
            <input type="radio" name="selector" id="2btn" value="Второе поле" @click="changeField(2)">
            <label for="2btn">Второе поле</label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hasFirstNum: false,
            isActive: false,
            firstNum: "",
            operation: null,
            secondNum: "",
            result: null,
            numbers: 10,
            selected: 1
        };
    },
    methods: {
        calc() {
            if (
                this.firstNum.length !== 0 &&
                this.secondNum.length !== 0
            ) {
                if (this.operation === '/' && this.secondNum === '0') {
                    this.result = 'ERR';
                } else {
                    this.result = eval(
                        `${this.firstNum} ${this.operation} ${this.secondNum}`
                    );
                }
            }
        },
        saveOperation(event) {
            this.operation = event.target.value;
            this.calc();
        },
        checkInput(event) {
            if (!isNaN(Number(event.target.value))) {
                this.calc();
            }
        },
        changeField(n) {
            this.selected = n
        },
        pushNum(event) {
            if(this.selected === 1){
                this.firstNum += event.target.innerText
            }
            else {
                this.secondNum += event.target.innerText
            }
            if(this.operation !== null) {
                this.calc()
            }
        },
        del() {
            this.selected === 1 ? this.delLastIndex(this.firstNum) : this.delLastIndex(this.secondNum)
            if(this.operation !== null) {
                this.calc()
            }
        },
        delLastIndex(str) {
            let arr = str.split('')
            arr.splice(str.lastIndexOf(), 1)
            str = arr.join('')
            this.selected === 1 ? this.firstNum = str : this.secondNum = str
            }
    },
};
</script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.calc {
    max-width: 320px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
}
input {
    margin-top: 20px;
    border: none;
    outline: none;
    font-size: 30px;
    padding-left: 5px;
    padding-right: 5px;
}
input::placeholder {
    opacity: 0.4;
    font-size: 30px;
}
.select {
    display: block;
    min-width: 64px;
    position: relative;
    margin-top: 15px;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 0.5em;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
}
option {
    max-width: 90px;
}
.calculation {
    min-width: 100px;
    max-height: 50px;
    display: flex;
    justify-content: space-between;
}
p {
    margin: 0;
    margin-top: 15px;
    margin-left: 20px;
    height: 50px;
    font-size: 30px;
}

.select-css::-ms-expand {
    display: none;
}
.select-css:hover {
    border-color: #888;
}
.select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
}
.select-css option {
    font-weight: normal;
}
*[dir='rtl'] .select-css,
:root:lang(ar) .select-css,
:root:lang(iw) .select-css {
    background-position: left 0.7em top 50%, 0 0;
    padding: 0.6em 0.8em 0.5em 1.4em;
}

.keyboard {
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
.btn {
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    cursor: pointer;
    padding-top: 3px;
}
</style>
