import Script from 'next/script'

export const GAnalitycs = () => (
  <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-K2L5D9XGMB" />
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-K2L5D9XGMB');`
      }}
    />
  </>
)