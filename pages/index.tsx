import HeroSection from "@/components/HeroSection";
import { compareDesc } from "date-fns";
import PostCard from "@/components/Postcard";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import MetaConfig from "@/components/MetaConfig";
import { CONFIG } from "../site.config"

export default function Home({ posts, currentPage, numPages }: any) {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    // Filter posts based on the search query whenever it changes
    const filtered = posts.filter((post: any) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  const handlePrev = (page: any) => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      router.push(`/?page=${prevPage}`);
    }
  };

  const handleNext = (page: any) => {
    if (currentPage < numPages) {
      const nextPage = currentPage + 1;
      router.push(`/?page=${nextPage}`);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  }

  return (
    <>
      <Head>
        <title>
          Latest Industry News, Interviews, and Resources for Your Event
          Business | Easeplan Blog
        </title>
        <meta
          name="description"
          content="Explore the latest industry news, insightful interviews, and valuable resources to help your event business thrive. Visit Easeplan Blog today for expert insights and updates."
        />
  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Latest Industry News, Interviews, and Resources for Your Event Business | Easeplan Blog"
        />
        <meta
          property="og:description"
          content="Explore the latest industry news, insightful interviews, and valuable resources to help your event business thrive. Visit Easeplan Blog today for expert insights and updates."
        />
        <meta
          property="og:url"
          content="https://blog.easeplan.io"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dw8my5zef/image/upload/v1703842341/r0gqekuqsfjfbkqyv1o8.png"
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Latest Industry News, Interviews, and Resources for Your Event Business | Easeplan Blog"
        />
        <meta
          name="twitter:description"
          content="Explore the latest industry news, insightful interviews, and valuable resources to help your event business thrive. Visit Easeplan Blog today for expert insights and updates."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dw8my5zef/image/upload/v1703842341/r0gqekuqsfjfbkqyv1o8.png"
        />
        <meta
          name="keywords"
          content="event industry news, event business resources, event business interviews, Easeplan Blog"
        />
      </Head>
      <main>
        <MetaConfig author={""} profilePicture={""} {...meta} />
        <HeroSection handleSearch={handleSearch} searchQuery={searchQuery} />
        <section className="blog pb-4 lg:pt-0 lg:pb-5 px-0 lg:px-1 w-full overflow-x-hidden">
          <div className="container mx-auto max-w-screen-lg overflow-hidden mt-10">
            <div className="flex flex-wrap">
              {/* Render filteredPosts instead of sortedPostes */}
              {filteredPosts.map((post: any, idx: any) => (
                <PostCard key={idx} {...post} />
              ))}
            </div>
          </div>
          <div className="pagination">
            {currentPage > 1 && (
              <span style={{ marginRight: "5px" }} onClick={handlePrev}>
                {`<< Prev`}
              </span>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <Link key={i} href={`/?page=${i + 1}`}>
                <span className={currentPage === i + 1 ? "active" : ""}>
                  {i + 1}{" "}
                </span>
              </Link>
            ))}
            {currentPage < numPages && (
              <span style={{ marginLeft: "5px" }} onClick={handleNext}>
                {`Next >>`}
              </span>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

const parseMarkdownFiles = (directory: string) => {
  const files = fs.readdirSync(path.join(directory));
  const markDownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markDownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${directory}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug: fileName.replace(".md", ""),
      title: matterResult.data.title,
      description: matterResult.data.description,
      pubDate: matterResult.data.pubDate,
      heroImage: matterResult.data.heroImage,
      author: matterResult.data.author,
      authorBio: matterResult.data.authorBio,
      profilePicture: matterResult.data.profilePicture,
    };
  });
  return posts;
};

export async function getServerSideProps({ query }: any) {
  const postsDirectory = path.join(process.cwd(), "posts"); // Replace with your directory path
  const posts = parseMarkdownFiles(postsDirectory);

  // Calculate the start and end index of posts for the current page
  const currentPage = query.page ? parseInt(query.page) : 1;
  const postsPerPage = 10; // Number of posts per page (adjust as needed)
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedPosts = posts.slice(startIndex, endIndex);
  const numPages = Math.ceil(posts.length / postsPerPage);

  return {
    props: {
      posts: paginatedPosts,
      currentPage,
      numPages,
    },
  };
}
