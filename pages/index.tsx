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
      <amp-sticky-ad layout="nodisplay">
     <amp-ad width="320" height="50" type="doubleclick" data-slot="/35096353/amptesting/formats/sticky">
     </amp-ad>
     </amp-sticky-ad>

  <!--
    `amp-sticky-ad` will display after scroll one viewport height from top provided there is at least one more viewport of content available.

    [tip type="note"]
    The text that follows is intentionally *Lorem Ipsum* to ensure that there is another viewport from the first one on top to demonstrate `amp-sticky-ad`.
    [/tip]
  -->
  <!--
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, metus a tristique aliquet, enim nibh efficitur sem, ut iaculis urna justo eu diam. Nullam cursus sapien et sodales posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Donec vitae ornare risus. Maecenas eleifend ante vel dui laoreet, et porttitor libero rutrum. Nam arcu mi, ullamcorper at risus et, pulvinar ultrices erat. In pellentesque sem vel purus auctor, ut venenatis tellus tristique. Phasellus molestie diam orci, nec gravida turpis bibendum ut. Sed sagittis aliquet lorem sed dictum.
  -->

      <p>
        Import your <a href={isAmp ? '/privacy?amp=1' : '/privacy'}>Privacy</a>,
        eat grass, throw it back up but refuse to leave cardboard box or groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!. Hide from vacuum
        cleaner.
     
      </p>
        

              
      <p>
        Import your <a href={isAmp ? '/terms?amp=1' : '/terms'}>Terms</a>,
        eat grass, throw it back up but refuse to leave cardboard box or groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!. Hide from vacuum
        cleaner.
     
        </p>
      <p>
        Import your <a href={isAmp ? '/about?amp=1' : '/about'}>About</a>,
        eat grass, throw it back up but refuse to leave cardboard box or groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!. Hide from vacuum
        cleaner.
      </p>
       
      <p>
        Import your <a href={isAmp ? '/contact?amp=1' : '/contact'}>Contact</a>,
        eat grass, throw it back up but refuse to leave cardboard box or groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!. Hide from vacuum
        cleaner.
      </p>
      <p className="caption">Follow Me</p>
      <Byline author="Maliek Galant" />
      
      <style jsx>
.amp-sticky-ad-close-button {
      min-width: 0;
    }
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
