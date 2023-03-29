import { gql } from "graphql-request";

export const BLOG_QUERY = gql`
  {
    posts {
      id
      slug
      title
      image {
        url
        altText
      }
      category {
        id
        slug
        title
      }
      authors {
        name
        id
        content {
          html
        }
        image {
          id
          url
          altText
        }
      }
      datePublished
      preview
    }
  }
`;

export const POST_BY_SLUG_QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      content {
        html
      }
      image {
        url
        altText
      }
      category {
        id
        slug
        title
      }
      authors {
        name
        id
        content {
          html
        }
        image {
          id
          url
          altText
        }
      }
      datePublished
    }
  }
`;

export const POST_SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export const RESOURCE_QUERY = gql`
  {
    resources {
      id
      slug
      title
      url
      category {
        slug
        title
        id
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

export const SPONSORS_QUERY = gql`
  {
    sponsors {
      resources {
        id
        slug
        title
        url
        image {
          url
          altText
        }
        content {
          html
        }
      }
    }
  }
`;

export const SPEAKERS_QUERY = gql`
  {
    speakers {
      id
      name
      url
      description
      image {
        altText
        url
      }
    }
  }
`;

export const RESOURCE_CATEGORY_QUERY = gql`
  {
    resourceCategories {
      slug
      title
      id
    }
  }
`;

export const RESOURCE_SLUGLIST = gql`
  {
    resources {
      category {
        slug
      }
    }
  }
`;
export const RESOURCE_BY_CATEGORY_SLUG = gql`
  {
    resources(where: { category_some: { slug_contains: $slug } }) {
      title
      id
      slug
      url
      image {
        altText
        url
      }
      content {
        html
      }
      category {
        slug
        title
        id
      }
    }
  }
`;

export const SCHEDULE_QUERY = gql`
  {
    schedules {
      title
      id
      eventDate
      active
      briefDescription
      zoomLink
      description {
        html
      }
    }
  }
`;
