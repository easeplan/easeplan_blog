import HeroSection from "@/components/HeroSection";
import { compareDesc } from "date-fns";
import PostCard from "@/components/Postcard";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function Home({ posts }: any) {
  const sortedPostes = posts.sort(
    (
      a: { pubDate: string | number | Date },
      b: { pubDate: string | number | Date }
    ) => compareDesc(new Date(a.pubDate), new Date(b.pubDate))
  );
  return (
    <main>
      <HeroSection />
      <section className="blog pb-4 lg:pt-0 lg:pb-5 px-0 lg:px-1 w-full overflow-x-hidden">
        <div className="container mx-auto max-w-screen-lg overflow-hidden mt-10">
          <div className="flex flex-wrap">
            {sortedPostes.map((post: any, idx: any) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const markDownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markDownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
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

  return {
    props: {
      posts,
    },
  };
}