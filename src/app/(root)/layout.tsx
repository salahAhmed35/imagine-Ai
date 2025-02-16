import * as React from 'react';
import Sidebar from '@/components/shared/Sidebar';
import MobileNav from '@/components/shared/MobileNav';


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='root'>
            <div className='hidden md:block'>
                <Sidebar />
            </div>
            <div className='block md:hidden'>
                <MobileNav />
            </div>
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    )
}
export default Layout