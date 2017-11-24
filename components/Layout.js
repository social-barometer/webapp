import Head from 'next/head'
import Header from './Header'

export default (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    </Head>
    <main>
      <Header title="Social Barometer"/>
       { props.children }
    </main>
    <style jsx global>{`

    `}</style>
  </div>
)
