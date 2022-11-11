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
     
      
      
    
      
      <style jsx>
{`
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
