import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.28/vue.esm-browser.min.js';

createApp({
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            const apiUrl = 'https://vue3-course-api.hexschool.io/v2/admin/signin';            
            axios.post(apiUrl, this.user)
            .then((response) => {                
                const { expired, token } = response.data;
                // 將 token 存到 cookie
                document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
                // 轉址到產品頁面
                window.location = 'products.html';
            })
            .catch((err) => {
                alert(err.data.message);
            });
        }
    }
}).mount('#app');