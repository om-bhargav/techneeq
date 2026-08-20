import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Providers from '../providers'
export default function PageLayout() {
    return (
        <Providers>
        <div>
            <Navbar />
            <main className='grid'>
                <Outlet />
            </main>
            <Footer />
        </div>
        </Providers>
    )
}
