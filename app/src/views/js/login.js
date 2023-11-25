import { ref } from 'vue';
import axios from 'axios'

export const loginAuthentication = (router) =>{
    const username = ref('')
    const password = ref('')

    const authenticateUser = async () =>{
        try{
            const response = await axios.post('http://localhost:3000/login',{
                username: username.value,
                password: password.value
            });
            if(response.status == 404){
                //error message
            }

            if(router){
                router.replace({path: `/tabs/tab2/${username.value}`})
            }else{
                console.log('tangina mo')
            }

        }catch (error){
            console.error('Error gago', error)
        }
    }

    return {
        username,
        password,
        authenticateUser
    }
}