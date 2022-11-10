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
      <!-- Landing page -->
      <main role="main" class="lune-page lune-page-landing relative">
      <div class="lune-landing-page-wrapper relative">
        <!-- Landing section -->
        <section
          class="lune-landing-section relative top-0 left-0 right-0 z2 lune-theme-light"
        >
          <div
            class="lune-landing-section-wrapper absolute top-0 left-0 bottom-0 right-0 flex flex-column items-center justify-between"
          >
            <!-- Used by screen reader / document outline, not visible -->
            <h2 class="hide">Lune blanc</h2>
            <figure class="lune-landing-content relative col-12 m0 flex-none">
              <!-- Chair image -->
              <!-- WebP image -->
              <amp-img
                class="lune-anim-scale-up z1"
                alt="Lune Blanc"
                srcset="../img/lune/landing-hero-blanc@1x.webp, ../img/lune/landing-hero-blanc@2x.webp 2x"
                width="1"
                height="1.37"
                layout="responsive"
              >
                <!-- Placeholder -->
                <!-- Commented out for now as an issue remains when using placeholders with web
                         https://github.com/ampproject/amphtml/issues/10646 -->
                <!-- PNG Fallback -->
                <amp-img
                  fallback=""
                  class="lune-anim-scale-up z1"
                  alt="Lune Blanc"
                  srcset="../img/lune/landing-hero-blanc@1x.png, ../img/lune/landing-hero-blanc@2x.png 2x"
                  width="1"
                  height="1.37"
                  layout="responsive"
                >
                </amp-img>
              </amp-img>
              <!-- Product name -->
              <span
                class="lune-landing-title-middle lune-anim-move-up flex justify-between z1 absolute caps h3 md-h1"
                aria-hidden="true"
                ><span>b</span><span>l</span><span>a</span><span>n</span
                ><span>c</span></span
              >
              <!-- LU- -->
              <span
                class="lune-landing-title-top lune-anim-move-up absolute inline-block z1 caps"
                aria-hidden="true"
                >lu-</span
              >
              <!-- -NE -->
              <span
                class="lune-landing-title-bottom lune-anim-move-up absolute inline-block z1 caps"
                aria-hidden="true"
                >-ne</span
              >
            </figure>
            <!-- Dictover CTA -->
            <a
              href="product-blanc.amp.html"
              class="ampstart-btn ampstart-btn-secondary relative inline-block overflow-hidden caps h7 center lune-anim-move-up z2 lune-theme-light lune-transparent"
            >
              <span class="relative block z3">Discover blanc</span>
            </a>
            <!-- Scroll indicator -->
            <aside
              class="lune-component-scroll-indicator caps bold flex flex-column items-center h7 m0 relative"
            >
              <p>Scroll</p>
            </aside>
          </div>
        </section>

        <!-- Landing section -->
        <section
          class="lune-landing-section relative top-0 left-0 right-0 z1 lune-theme-dark"
        >
          <div
            class="lune-landing-section-wrapper absolute top-0 left-0 bottom-0 right-0 flex flex-column items-center justify-between"
          >
            <!-- Used by screen reader / document outline, not visible -->
            <h2 class="hide">Lune noir</h2>
            <figure class="lune-landing-content relative col-12 m0 flex-none">
              <!-- Chair image -->
              <!-- WebP image -->
              <amp-img
                class="lune-anim-scale-up z1"
                alt="Lune Noir"
                srcset="../img/lune/landing-hero-noir@1x.webp, ../img/lune/landing-hero-noir@2x.webp 2x"
                width="1"
                height="1.37"
                layout="responsive"
              >
                <!-- Placeholder -->
                <!-- Commented out for now as an issue remains when using placeholders with web
                         https://github.com/ampproject/amphtml/issues/10646 -->
                <!-- PNG Fallback -->
                <amp-img
                  fallback=""
                  class="lune-anim-scale-up z1"
                  alt="Lune Noir"
                  srcset="../img/lune/landing-hero-noir@1x.png, ../img/lune/landing-hero-noir@2x.png 2x"
                  width="1"
                  height="1.37"
                  layout="responsive"
                >
                </amp-img>
              </amp-img>
              <!-- Product name -->
              <span
                class="lune-landing-title-middle lune-anim-move-up flex justify-between z1 absolute caps h3 md-h1"
                aria-hidden="true"
                ><span>n</span><span>o</span><span>i</span><span>r</span></span
              >
              <!-- LU- -->
              <span
                class="lune-landing-title-top lune-anim-move-up absolute inline-block z1 caps"
                aria-hidden="true"
                >lu-</span
              >
              <!-- -NE -->
              <span
                class="lune-landing-title-bottom lune-anim-move-up absolute inline-block z1 caps"
                aria-hidden="true"
                >-ne</span
              >
            </figure>
            <!-- Dictover CTA -->
            <a
              href="product-noir.amp.html"
              class="ampstart-btn ampstart-btn-secondary relative inline-block overflow-hidden caps h7 center lune-anim-move-up z2 lune-theme-dark lune-transparent"
            >
              <span class="relative block z3">Discover noir</span>
            </a>
            <!-- Scroll indicator -->
            <aside
              class="lune-component-scroll-indicator caps bold flex flex-column items-center h7 m0 relative"
            >
              <p>Scroll</p>
            </aside>
          </div>
        </section>
      </div>
    </main>
      <p>
        Import your <a href={isAmp ? '/terms?amp=1' : '/terms'}>Terms Of Use</a>,
        eat grass, throw it back up but refuse to leave cardboard box or groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!. Hide from vacuum
        cleaner.
      </p>
       <p>
        Import your <a href={isAmp ? '/home?amp=1' : '/'}>Programs</a>,
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
      <p className="caption">Follow Me</p>

      <style jsx>{`
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}
