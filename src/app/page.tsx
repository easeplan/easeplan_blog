import HeroSection from "@/components/HeroSection";
import { compareDesc } from "date-fns";
import PostCard from "@/components/Postcard";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
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
  return posts;
};

export default function Home() {
  const postMetadata = getPostMetadata();
  const posts = postMetadata.sort((a, b) =>
    compareDesc(new Date(a.pubDate), new Date(b.pubDate))
  );
  return (
    <main>
      <HeroSection />
      <section className="blog pb-4 lg:pt-0 lg:pb-5 px-0 lg:px-1 w-full overflow-x-hidden">
        <div className="container mx-auto max-w-screen-lg overflow-hidden mt-10">
          <div className="flex flex-wrap">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
