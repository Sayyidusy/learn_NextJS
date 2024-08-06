import styles from './navbar.module.css';
import {useRouter} from 'next/router';
import Link from 'next/link';

const Navbar = () => {

    const {push} = useRouter();

    const LoginPage = () => {
        push('/auth/login');
    }

    return (
        <header className='bg-white'>
            
            <nav className="flex justify-between items-center w-[92%] mx-auto">

                <div>
                    <img className="w-16" src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" alt="LOGO" />
                </div>

                <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[100%] md:w-auto w-full flex items-center px-5">
                    <ul className="flex my- md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <Link href={"/index.tsx"} className='hover:text-gray-700 text-[12px]'>Home</Link>
                        </li>
                        <li>
                            <Link href={"/product"} className='hover:text-gray-700 text-[12px]'>Product</Link>
                        </li>
                        <li>
                            <Link href={"/about"} className='hover:text-gray-700 text-[12px]'>About</Link>
                        </li>
                        <li>
                            <Link href={"/contact"} className='hover:text-gray-700 text-[12px]'>Contact</Link>
                        </li>
                        <li>
                            <button className="bg-[#d4d4d4] text-[#686D76] rounded-lg text-thite px-4 py-2 text-[12px] hover:bg-[#868686] hover:text-white" onClick={()=> LoginPage() }>
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;