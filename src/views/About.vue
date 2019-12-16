<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="handleTestGet">测试 get</button>
        <button @click="handleTestPost">测试 post</button>
        <div>
            <input v-model="inputValue" type="text">
            <button @click="handleCreateUser">测试保存</button>
        </div>
    </div>
</template>

<script>
import { testGet, testPost, createUser } from '../api/test'
export default {
    name: 'About',
    data () {
        return {
            inputValue: ''
        }
    },
    methods: {
        handleTestGet () {
            testGet()
        },
        handleTestPost () {
            testPost()
        },
        handleCreateUser () {
            createUser({ content: this.inputValue })
        }
    }
}
</script>
