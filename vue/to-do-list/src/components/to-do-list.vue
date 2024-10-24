<template>
  <div class="to-do-list">
    <div class="add-items">
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="請輸入新項目名稱"> <!--這邊有設定@keyup.enter代表按下enter後觸發addTodo函式-->
        <button @click="addTodo">新增</button>  <!--這邊則是點擊按鈕後觸發addTodo函式-->
    </div>
    <div class="items">
        <h1>待辦事項</h1>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
                <button @click="deleteTodo(index)">刪除</button>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex' // 這邊使用import去引入vuex的 mapMutations 和 mapState 這兩個輔助函數
export default {
  data () {
    return {
      newTodo: '' // 設置一個空字串用於雙向綁定在input輸入框上
    }
  },
  methods: {
    ...mapMutations(['add_new_todo', 'remove_todo']), // 使用...展開mapMutations 並取用裡面的 add_new_todo 和 remove_todo 函式
    addTodo () { // 創建一個addTodo點擊函式
      if (this.newTodo) { // 當點擊按鈕時如果newTodo有檢查到字串
        this.add_new_todo(this.newTodo) // 則觸發add_new_todo函式 把當前的newTodo當作參數丟進去 這樣就成功把新增的事項丟到vuex的todos陣列裡了
        this.newTodo = '' // 再來把input輸入框的字串清空
      }
    },
    deleteTodo (index) { // 創建一個deleteTodo點擊函式 並設定一個參數名稱為index
      this.remove_todo(index) // 當點擊按鈕時因為上面li部分有用v-for 並有index索引 所以把這邊的index索引放到deleteTodo函式當作參數 那索引帶進來自然也會變成remove_todo的參數
    } // remove_todo會依照index參數去決定要刪除todos陣列裡的哪一個索引項目
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>

<style>
    .to-do-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .add-items{
        margin-bottom: 10px;
    }
    .add-items button{
        margin-left: 20px;
        font-size: 20px;
    }
    .add-items input{
        font-size: 20px;
    }
    .items{
        width: 500px;
        height: 500px;
        border: 1px solid #000;
    }
    .items ul {
        display: block;
        max-height: 400px;
        font-size: 20px;
        overflow-y: auto;
        padding: 0 10px;
    }
    .items li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #000;
    }
    h1{
        border-bottom: 1px solid #000;
        padding-bottom: 10px;
    }
</style>
