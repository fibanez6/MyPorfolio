import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../../next-seo-config';

export const SEO = () => (
    <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={false}/>
)