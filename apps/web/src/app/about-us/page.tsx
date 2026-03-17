import Typography from '@/components/atoms/Typography';
import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/@types/next.types';

export const metadata = {
  title: ['About', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const AboutUsPage: Component = () => (
  <Typography as="h1" className="text-center" variant="title">
    Hello, About Us
  </Typography>
);

export default AboutUsPage;
