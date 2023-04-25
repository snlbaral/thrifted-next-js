import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head />
      <body className='bg-white dark:bg-black' style={{background:"black"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
