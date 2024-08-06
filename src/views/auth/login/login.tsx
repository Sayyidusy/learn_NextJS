import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './login.module.scss';

const LoginViews = () => {

    const {push,query} = useRouter();
    
    const handleLogin = () => {
       push('/product');
    }
    
    return (
        <div className={styles.login}>
            <h1 className='text-xl'>Login Pages</h1>
            <h3>
                Belum punya akun?  <Link href={"/auth/register"}>Register Disini</Link>
            </h3>
            <button onClick={() => handleLogin() }>Login</button>
        </div>
    );
}

export default LoginViews;