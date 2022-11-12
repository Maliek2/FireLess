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
  <amp-consent id="myUserConsent" layout="nodisplay">
    <script type="application/json">{
      "consentInstanceId": "myConsent",
      "consentRequired": true,
      "promptUISrc": "/static/samples/files/diy-consent.html",
      "postPromptUI": "post-consent-ui"
    }</script>
    <div id="post-consent-ui">
      <button on="tap:myUserConsent.prompt()">Update Consent</button>
    </div>
  </amp-consent>
  <!-- ## Consent Dialog Iframe -->
  <!--
    When the consent dialog iframe is ready, it can send the `amp-consent` component a postMessage with the style information.

    ```js
    window.parent.postMessage({
      type: 'consent-ui',
      action: 'ready',
      initialHeight: '80vh',
      enableBorder: true
    }, '*');
    ```

    Here, the initialHeight is a string that represents the viewport height that the iframe should take.
    A viewport height between 30 and 60, inclusive, will tell `amp-consent` to style the iframe in a bottom sheet.
    A viewport height greater than 60 and less than or equal to 80 will tell `amp-consent` to style the iframe as a centered modal.
  -->

    <!--
    Use `data-block-on-consent` attribute to block AMP components until consent is given.
    Individual AMP components can override  blocking behavior and implement blocking logic themselves.

    Here is an image which is blocked until consent is given:
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
