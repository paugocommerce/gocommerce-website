import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const {locale} = this.props.__NEXT_DATA__ 
        const dir = locale === 'ar' ? 'rtl' : 'ltr';
        return (
            <Html dir={dir} lang={locale}>
                <Head>
                
                    <link 
                        rel="icon" 
                        type="image/png" 
                        href="/images/GoCommerce-Favicon.png"
                    ></link>
                    <link 
                        href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" 
                        rel="stylesheet"
                    ></link>
                </Head>
                <body>
                <div id="root">
                <div id="globalLoader">
                <img 
                        src='/images/pulse.gif'
                       
                        alt="lazada-award" 
                                    />
                </div>
                    <Main />
                    <NextScript />
                    {/*Below we add the modal wrapper*/}
                    
                    </div>   
                </body>
            </Html>
        )
    }
}

export default MyDocument;