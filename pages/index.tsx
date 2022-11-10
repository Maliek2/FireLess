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
      <p className="caption">Follow Me</p>

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

      <Byline author="Maliek Galant" />
      
      <style jsx>{`
        h1 {
          margin-bottom: 5px;
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
