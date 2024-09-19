'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import apolloClient from './graphql-client';

interface ApolloProviderClientProps {
  children: ReactNode;
}

export default function ApolloProviderClient({ children }: ApolloProviderClientProps) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
