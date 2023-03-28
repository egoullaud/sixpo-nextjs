import { GraphQLClient, gql } from "graphql-request";

const hygraph = new GraphQLClient(`${process.env.HYGRAPH_URL}`);
const CATEGORY_QUERY = gql`
  {
    resourceCategories {
      title
      resources {
        title
        url
        image {
          altText
          url
        }
        content {
          html
        }
      }
    }
  }
`;

const RESOURCE_QUERY = gql`
  {
    resources {
      id
      slug
      title
      url
      category {
        title
      }
      content {
        html
      }
      image {
        url
        altText
      }
    }
  }
`;
