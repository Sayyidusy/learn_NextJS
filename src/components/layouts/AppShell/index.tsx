import { Children } from 'react';
import Navbar from '../navbar';
import { useRouter } from 'next/router';

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login","/auth/register","/404"];

const AppShell = (props : AppShellProps) => {
    const { children } = props;
    const {pathname} = useRouter();
    
    return (
        //menggunakan main tag untuk menandakan bahwa ini adalah konten utama beda dari div yang biasa digunakan untuk container
        <main> 
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            
        </main>
    );
}

export default AppShell;