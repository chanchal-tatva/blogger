import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query GetBlogs {
    posts {
      edges {
        node {
          id
          title
          slug
          excerpt
        }
      }
    }
  }
`;

export const GET_BLOG_BY_SLUG = gql`
  query GetBlogBySlug($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      date
    }
  }
`;
