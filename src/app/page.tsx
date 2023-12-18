import HeroSection from "@/components/HeroSection";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "@/components/Postcard";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
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
