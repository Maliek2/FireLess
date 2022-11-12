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
      <p>Lorem ipsum dolor sit amet, voluptua oporteat cum cu, eu vix interesset scribentur. Et iudico efficiendi duo, vim an odio iusto reformidans. At maluisset scripserit duo, cum in sumo delenit. Quot erant maiestatis usu ut. Ne mea maiorum vivendum argumentum, tale utinam postea mei in, eam in odio dicta patrioque.
      </p>
      <p>
      Cum ad graeci legimus, ut duo omnesque petentium, mei saepe explicari principes eu. Ex mei ocurreret expetendis, ex errem blandit has. Phaedrum mediocrem appellantur his ut. Erat viris mediocrem id ius, ad dicta appareat assentior sit. Nec et nullam singulis moderatius, est reque vidisse copiosae eu.
      </p>
      <p>
      Mutat dolores ea duo. Usu cu dico everti tincidunt, pri vero nullam vidisse no. Eam novum aeque populo cu. Verear contentiones ne quo, no sed consulatu definitionem.
      </p>
      <p>
      Cum ad graeci legimus, ut duo omnesque petentium, mei saepe explicari principes eu. Ex mei ocurreret expetendis, ex errem blandit has. Phaedrum mediocrem appellantur his ut. Erat viris mediocrem id ius, ad dicta appareat assentior sit. Nec et nullam singulis moderatius, est reque vidisse copiosae eu.</p>
      <p>
      Mutat dolores ea duo. Usu cu dico everti tincidunt, pri vero nullam vidisse no. Eam novum aeque populo cu. Verear contentiones ne quo, no sed consulatu definitionem.
      </p>
      <p>
      Cum ad graeci legimus, ut duo omnesque petentium, mei saepe explicari principes eu. Ex mei ocurreret expetendis, ex errem blandit has. Phaedrum mediocrem appellantur his ut. Erat viris mediocrem id ius, ad dicta appareat assentior sit. Nec et nullam singulis moderatius, est reque vidisse copiosae eu.</p>
      <p>
      Mutat dolores ea duo. Usu cu dico everti tincidunt, pri vero nullam vidisse no. Eam novum aeque populo cu. Verear contentiones ne quo, no sed consulatu definitionem.
      </p>
      <p class="heading">
      <amp-social-share type="twitter" width="45" height="33"></amp-social-share>
      <amp-social-share type="facebook" width="45" height="33" data-attribution="254325784911610"></amp-social-share>
      <amp-social-share type="gplus" width="45" height="33"></amp-social-share>
      <amp-social-share type="email" width="45" height="33"></amp-social-share>
      <amp-social-share type="pinterest" width="45" height="33"></amp-social-share>
      </p>
        
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
