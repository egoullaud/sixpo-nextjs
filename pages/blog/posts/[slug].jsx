import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import moment from "moment";

const hygraph = new GraphQLClient(`${process.env.HYGRAPH_URL}`);

const QUERY = gql`
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

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await hygraph.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await hygraph.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({ post }) {
  return (
    <main
      className="bg-black bg-opacity-70 flex flex-col justify-center items-center w-[100%]
                py-[1rem] px-[1rem]
                md:py-[3rem]
    "
    >
      <section className="flex items-center justify-center">
        <div
          className="blog-page bg-white rounded shadow-md flex flex-col items-center justify-center 
         w-[100%] 
         md:w-[90%]"
        >
          <img
            className="w-[95%]  object-cover rounded m-4"
            src={post.image.url}
            alt={post.image.altText}
          />
          <h3 className=" w-[90%] text-center font-bold mx-4 md:text-xl lg:text-2xl mt-6">
            {post.title}
          </h3>
          <h4 className="text-base mt-3">
            {/* map over authors array */}
            {post.authors?.map((author) => {
              return `${author.name}`;
            })}{" "}
            | {moment(post.datePublished).format("MMM DD, YYYY")}{" "}
          </h4>
          <p
            className="text-base text-left
            p-4
            md:p-10"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></p>

          {/* about the author */}
          <div>
            {post.authors?.map((author) => (
              <div
                key={author.id}
                className="about-author bg-slate-100 rounded-md mx-4 mb-[2rem]
                        "
              >
                <h1
                  className="font-bold text-3xl text-center pt-[1rem]
                        "
                >
                  About the Author
                </h1>
                <div
                  className=" author-page flex flex-col items-center justify-center 
                          "
                >
                  <div
                    className="flex flex-col items-center mx-[3rem] mt-[1rem]
                      lg:ml-4 lg:mx-0 "
                  >
                    <img
                      className="rounded-full w-[75%] md:w-[45%] lg:w-[30%]"
                      src={author.image.url}
                    ></img>
                    <h1 className="font-normal text-2xl">{author.name}</h1>
                  </div>
                  <div className="author-text">
                    <p
                      className=" text-left m-4"
                      dangerouslySetInnerHTML={{
                        __html: author.content.html,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
