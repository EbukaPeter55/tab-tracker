import Api from '@/services/Api'
/* eslint-disable */
/**eslint-disable-next-line */
//export object which allows to call a register method to hit the endpoint
export default {
    register (credentials){
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })