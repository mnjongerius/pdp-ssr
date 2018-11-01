import Document, { Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico"/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}

export default CustomDocument
