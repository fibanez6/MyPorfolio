import seoData from 'content/seo-data.json';
import { NextSeo } from 'next-seo';

export default function Head(): JSX.Element {
  return <NextSeo {...seoData} useAppDir={true} />;
}
