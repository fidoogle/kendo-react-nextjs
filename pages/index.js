import '@progress/kendo-theme-default/dist/all.css';
import Nav from '../components/nav'
import Head from 'next/head'

const Index = () => {
    
    return (
        <div>
            <Head>
                <title>Kendo Samples</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://use.fontawesome.com/684e9e4879.js"></script>
            </Head>
            <Nav />
            <h2>Welcome</h2>
            These pages will contain some sample UI built with Kendo.
        </div>
    )
}

export default Index