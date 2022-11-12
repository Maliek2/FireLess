import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import Byline from '../components/Byline'

export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

  return (
    <Layout>
      <Head>
      <title>The Maliek Blog</title>
      </Head>
      
      <h1>Maliek Blog</h1>
      
        <ul>
          <li>
            On browsers that support <code>prefers-color-scheme</code> and report the user prefers <code>dark</code>,
            just obey and don't give the user an override option, since they clearly state they like dark.
          </li>
          <li>
            On browsers that support <code>prefers-color-scheme</code> and report the user prefers <code>light</code>
            or <code>no-preference</code>, offer the option to toggle dark mode manually.
          </li>
          <li>
            On browsers that don't support <code>prefers-color-scheme</code>,
            offer the option to toggle dark mode manually.
          </li>
        </ul>
  
      <style jsx>
{`

h1 {
      margin: 1rem;
    }
     body {
      background-color: blue;
    }
        h1 {
          margin-bottom: 5px;
          color: green;
        }
        p {
          font-size: 16px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: left;
        }
      `}</style>
    </Layout>
  )
}
