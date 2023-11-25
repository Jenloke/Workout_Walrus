import { ref } from 'vue';
import axios from 'axios'

export const registerUser = (router) =>{
    const username = ref('')
    const password = ref('')
    const birthday = ref(Date)
    const name = ref('')
    const height = ref(0)
    const weight = ref(0)

    const signUp = async () =>{
        try{
            const response = await axios.post('http://localhost:3000/signup',{
                username: username.value,
                password: password.value,
                birthday: birthday.value,
                name: name.value,
                height: height.value,
                weight: weight.value,
                totalCalBurned: 0
            });
            if(response.status == 404){
                //error message
            }

            console.log('User signed up successfully')

            if(router){
                router.replace({path: `/login`})
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
        birthday,
        name,
        height,
        weight,
        signUp
    }
}