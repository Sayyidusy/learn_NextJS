import Link from 'next/link';
import styles from './register.module.css';
import { useRouter } from 'next/router';



const RegisterViews = () => {

    const {push,query} = useRouter();

    const handleRegister = () => {
        push('/product');
    }

    return (
        <div className={styles.register}>
            <h1>Register Page</h1>
            <h3>
                Sudah punya akun? <Link href={"/auth/login"} >Login Disini</Link>
            </h3>
            <button onClick={() => handleRegister() }>Register</button>
        </div>
    );

}

export default RegisterViews;