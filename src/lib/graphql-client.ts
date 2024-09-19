import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const endpoint= process.env.NEXT_PUBLIC_WORDPRESS_API

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri:endpoint
    }),
    cache: new InMemoryCache(),
});

export default apolloClient;
