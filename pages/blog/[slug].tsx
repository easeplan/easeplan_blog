// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Image from "next/image";
import useMarkdownToc from "@/components/TocRenderer";
import { insertPromotions } from "@/components/insertPromotion";
import { calculateReadTime, convertToISO } from "@/lib/utils";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import Link from "next/link";
import RelatedPostCard from "@/components/RelatedPostCard";
import { Comment } from "@/components/Comment";
import { useState } from "react";
import Head from "next/head";

const promotions = [
  {
    type: "1",
    imageUrl: "/easeplanlogo.png",
    link: "/",
    media: "image",
    description:
      "Are you an event vendor? list your business now on Easeplan to get bookings",
    cta: "Signup Now",
  },

  {
    type: "2",
    imageUrl: "/images/image7.png",
    link: "/",
    media: "image",
    description:
      "Over 2,000 clients are looking for caterers, dj, bakers, make-up, decorators like you on Easeplan ",
    cta: "Get Booked",
  },
  {
    type: "1",
    imageUrl: "/easeplanlogo.png",
    link: "/",
    media: "image",
    description:
      "Finding a vendors in verrified Nigeria is 10x easier with Easeplan",
    cta: "Find vendors",
  },
  {
    type: "2",
    imageUrl: "/images/image7.png",
    link: "/",
    media: "image",
    description:
      "The reason you are not getting bookings as vendor is because clients can't find you",
    cta: "Get Bookings",
  },
  // ... additional promotions
];

const getRelatedPosts = (currentAuthor: string, allPosts: any) => {
  return allPosts.filter((post: any) => post.data.author === currentAuthor);
};

const PostLayout = ({
  content,
  frontmatter,
  slug,
  data: allPosts,
  comments,
}: any) => {
  const toc = useMarkdownToc(content as string);
  const markdownWithPromotions = insertPromotions(content, promotions);
  const relatedPosts = getRelatedPosts(frontmatter.author, allPosts);

  const [commentLocal, setComments] = useState<any[]>(comments);
  const [newComment, setNewComment] = useState("");
  const [notifyMe, setNotifyMe] = useState<any>("");
  const [saveEmail, setSaveEmail] = useState<any>("");
  const [name, setName] = useState(
    typeof window !== "undefined" ? localStorage.getItem("name") || "" : ""
  );

  const [email, setEmail] = useState(
    typeof window !== "undefined" ? localStorage.getItem("email") || "" : ""
  );

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      // Check if notifyMe is true and make a request to /newsletter
      if (notifyMe) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        });
      }

      // Save name and email to local storage if saveEmail is true
      if (saveEmail) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author: { name, email },
            text: newComment,
            postId: frontmatter.slug,
          }),
        }
      ).then((res) => res.json());

      setComments([...commentLocal, response]);
      setNewComment("");
    }
  };

  return (
    <>
      <Head>
        {/* <link
          rel="canonical"
          href="https://www.example.com/blog/latest-industry-news"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta
          property="og:url"
          content={`https://blog.easeplan.io/blog/${slug}`}
        />
        <meta property="og:image" content={frontmatter.heroImage} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description} />
        <meta name="twitter:image" content={frontmatter.heroImage} />
        <meta
          name="keywords"
          content="event industry news, event business resources, event business interviews, Easeplan Blog"
        />
      </Head>
      <div
        className="flex text-black justify-center"
        style={{
          fontFamily:
            "'Lexend Deca', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        <div className="xl:p-8 lg:p-8">
          <div className="text-white bg-[#174e64] p-4 xs:p-4 sm:p-4 md:p-4 xl:p-8 lg:p-8 xl:rounded-lg lg:rounded-lg relative text-white">
            <h1 className="font-bold text-3xl xl:text-3xl lg:text-3xl mb-4 xl:mt-8 lg:mt-8 leading-tight">
              {frontmatter.title}
            </h1>
            <div className="flex items-center mt-6">
              <Image
                className="rounded-full border-2 border-white shadow-lg"
                src={frontmatter.profilePicture}
                alt={frontmatter.author}
                width={50}
                height={50}
              />
              <div
                className="ml-4"
                style={{ lineHeight: "1.78", fontSize: "1.125rem" }}
              >
                <h2 className="font-semibold">{frontmatter.author}</h2>
                <p className="text-sm">{frontmatter.authorBio}</p>
                <div className="">
                  <span className="text-xs mt-2 rounded text-white">
                    {format(
                      parseISO(convertToISO(frontmatter.pubDate)),
                      "LLLL d, yyyy"
                    )}{" "}
                    · {calculateReadTime(content, 200)} min read
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-70">
            {/* Sidebar container for Table of Contents */}
            <div className="hidden lg:block">
              <div className="sticky top-0 p-4">
                <div className="p-4 rounded-lg">
                  <h2 className="font-bold text-xl mb-4">Table of contents</h2>
                  <ul
                    className="space-y-2  border-l-2 border-gray-200"
                    // style={{ borderLeft: "1px solid " }}
                  >
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        className={`p-1 text-black-100 hover:bg-gray-100 hover:border-l-2 hover:border-[#174e64] pl-${
                          item.level * 5
                        }`}
                        // style={{
                        //   paddingLeft: `${item.level * 5}px`,
                        // }} // adjust the multiplier as needed
                        style={{
                          paddingLeft: `${
                            item.level == 2 ? 3 : item.level * 8
                          }px`,
                        }}
                      >
                        <a
                          href={`${item.id}`}
                          className="block p-2 transition-colors duration-300 ease-in-out"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main content container */}
            <div className="flex-grow">
              <div className="container mx-auto max-w-[900px] px-8">
                <div className="mt-6 flex flex-col space-y-4">
                  <p
                    style={{
                      fontFamily:
                        "'Lexend Deca', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                      lineHeight: "1.78",
                      fontSize: "1.125rem",

                      color: "#213343",
                    }}
                  >
                    {frontmatter.description}
                  </p>
                  {frontmatter.heroImage && (
                    <Image
                      className="mx-auto rounded-md"
                      src={frontmatter.heroImage}
                      alt={frontmatter.title}
                      width={920}
                      height={640}
                    />
                  )}

                  <MarkdownRenderer content={markdownWithPromotions} />
                  <div className="h-8" />
                </div>
              </div>
            </div>
          </div>
          <div className="promo-container">
            <Image
              src="/easeplanlogo.png"
              alt="easeplanlogo"
              className="promo-logo"
              width={80}
              height={80}
            />
            <h1 className="promo-heading">
              Stop guessing about finding verified vendors, Easeplan has a match
            </h1>
            <a href="#" className="promo-cta">
              Get started for free
            </a>
          </div>

          {relatedPosts?.length > 0 && (
            <section className="blog pb-4 lg:pt-0 lg:pb-5 px-4 w-full overflow-x-hidden">
              <div className="overflow-hidden mt-10">
                <h2 className="text-2xl font-bold mb-4">Related Posts:</h2>
                <div className="flex flex-wrap">
                  {relatedPosts.map((post: any) => (
                    <RelatedPostCard key={post.data.slug} {...post.data} />
                  ))}
                </div>
              </div>
            </section>
          )}
          <div className="comment-section container mx-auto max-w-screen-lg">
            <h2>
              {commentLocal.length} Comments for {frontmatter.title}{" "}
            </h2>
            <div className="comment-list">
              {commentLocal.map((comment: any) => (
                <Comment key={comment._id} {...comment} />
              ))}
            </div>
            <div className="comment-form">
              <textarea
                name="new-comment"
                id="new-comment"
                cols={30}
                rows={5}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
              ></textarea>

              {!name && (
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              {!email && (
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
              <div className="w-full sm:w-1/2 mb-10 sm:px-2 xs:mb-6">
                <input
                  type="checkbox"
                  name="nofify"
                  id="notify"
                  checked={notifyMe}
                  onChange={(e) => setNotifyMe(e.target.checked)}
                />
                <span>Email me new posts</span>
              </div>
              <div className="w-full sm:w-1/2 mb-10 sm:px-2 xs:mb-6">
                <input
                  type="checkbox"
                  name="save"
                  id="save"
                  checked={saveEmail}
                  onChange={(e) => setSaveEmail(e.target.checked)}
                />
                <span>
                  Save my name, and email in this browser for the next comment.
                </span>
              </div>
            </div>
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const postFiles = fs.readdirSync(postsDirectory);

  const allPostsData = postFiles.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const slug = fileName.replace(/\.md$/, "");
    data.slug = slug;
    return {
      data,
    };
  });

  const markedownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf8"
  );
  const { data: frontmatter, content } = matter(markedownWithMeta);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${slug}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  return {
    props: {
      comments: response,
      data: allPostsData,
      frontmatter,
      slug,
      content,
    },
  };
}
export default PostLayout;
