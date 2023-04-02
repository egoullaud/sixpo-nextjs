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

export const SCHEDULE_QUERY = gql`
  {
    schedules(first: 100) {
      id
      title
      active
      briefDescription
      zoomLink
      isLiveEvent
      startDate
      endTime
      description {
        html
      }
    }
  }
`;

export const ALL_RESOURCES_QUERY = gql`
  query ALL_RESOURCES_QUERY {
    resources {
      id
      title
      url
      category {
        title
      }
      content {
        html
      }
      image {
        altText
        url
      }
    }
  }
`;

export const RESOURCE_BY_CATEGORY_QUERY = gql`
  query RESOURCE_BY_CATEGORY_QUERY($slug: String!) {
    resources(where: { category_some: { slug: $slug } }) {
      id
      title
      url
      content {
        html
      }
      image {
        altText
        url
      }
    }
  }
`;

export const RESOURCE_CATEGORIES_QUERY = gql`
  query RESOURCE_CATEGORIES_QUERY {
    resourceCategories {
      id
      title
      slug
      resources {
        content {
          html
        }
        id
        image {
          altText
          url
        }
        title
        url
      }
    }
  }
`;
