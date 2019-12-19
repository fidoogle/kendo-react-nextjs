import Nav from '../components/nav'

const Animated = () => {
    return (
        <>
            <Nav />
            <div>
                <h2>Animated Chart</h2>
                <p>This is not a Kendo Chart. I just included here to demonstrate the power of using Flutter Web to do charts. 
                    It is possible to embed these charts within our HTML, in a better way than using &lt;iframe&gt; like I did here.</p>
                <p>Use the controller to pan thru the data</p>
                <iframe height="500" width="800" src="https://larvalabs.com/public/productsites/githubdataviz/index.html#/"></iframe>
            </div>

            <style jsx>{`
                .responsive-container {
                    position: relative;
                    overflow: hidden;
                    padding-top: 40%;
                }
                .responsive-iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                }
            `}</style>
        </>
    )
}

export default Animated;