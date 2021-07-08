import { getToken } from '@/api/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function useLogin() {

    const username = ref("");
    const password = ref("");
    const router = useRouter();

    const login = async () => {
        try {
            const token = await getToken(username.value, password.value);
            // TODO: do something meaningful with the token :-)
            if(token.loginName){
                router.push('/tabs/calendar');
            } else{
                router.push('/login');
            }
        } catch (error) {
            console.log(error)
            alert("Falsches Passwort");
            router.push('/login');
        }
    }

    return {
        username,
        password,
        login
    }
}