import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

// can potentially use unknown instead of {} with the generic
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
