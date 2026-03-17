import { Suspense } from 'react';

import Loader from '@/components/atoms/Loader';
import constants from '@/constants';
import cn from '@/lib/cn';
import { interFont } from '@/styles/font';
import '@/styles/globals.css';

import type { Metadata } from 'next';

import type { Layout } from '@/@types/next.types';

export const metadata: Metadata = {
  title: constants.APP_NAME,
  description: `${constants.APP_NAME} Description`,
};

const RootLayout: Layout = async ({ children }) => (
  <html lang="en">
    <body className={cn(interFont.className, 'bg-background text-foreground')}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </body>
  </html>
);

export default RootLayout;
