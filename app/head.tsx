import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../next-seo-config';
import { GTagManager } from '../components/google/GTagManager';


export default function Head() {
  return (
    <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
  )
}
