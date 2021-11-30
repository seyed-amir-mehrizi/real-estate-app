
import { Box } from '@chakra-ui/layout';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer'
const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>
                    Real Estate
                </title>
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
}

export default Layout;