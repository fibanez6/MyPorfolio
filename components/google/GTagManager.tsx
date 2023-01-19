import Script from 'next/script'
import { ReactElement } from 'react'

export const GTagManager = (): ReactElement => (
  <Script
    id='google-tag-manager'
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MQQFNVH');`,
    }}
  />
)

export const GTagManagerBody = (): ReactElement => (
  <noscript>
    <iframe id="asd" src="https://www.googletagmanager.com/ns.html?id=GTM-MQQFNVH"
      height="0" width="0" hidden={true} >
    </iframe>
  </noscript>
)