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
      <amp-img data-block-on-consent src="https://preview.amp.dev/static/samples/img/landscape_lake_300x201.jpg" width="300" height="201">
      </amp-img>
      <amp-img data-block-on-consent src="https://preview.amp.dev/static/samples/img/landscape_lake_300x201.jpg" width="300" height="201">
      </amp-img>
      <amp-img data-block-on-consent src="https://preview.amp.dev/static/samples/img/landscape_lake_300x201.jpg" width="300" height="201">
      </amp-img>


. <!-- ## Defining the Consent Flow -->
  <!--
    We define a basic consent flow using the `promptUISrc` to load our custom consent iframe.
  -->

  
      <style jsx>
{`
:root {
      --space-3: 1.5rem; /* 24px */
    }
    #post-consent-ui {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: var(--space-3);
    }
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
