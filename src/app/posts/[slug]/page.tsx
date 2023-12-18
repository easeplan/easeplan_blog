// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Image from "next/image";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div>
      <div className="container mx-auto max-w-[920px] px-8">
        <div className="mt-4 flex flex-col space-y-4">
          {post.heroImage && (
            <Image
              className="mx-auto rounded-md"
              src={post.heroImage}
              alt={post.title}
              width={920}
              height={640}
            />
          )}
          <div className="flex items-center text-base">
            <span className="px-2 text-gray-200">•</span>
          </div>
          <h1 className="font-mono lg:text-4xl text-3xl font-semibold">
            {post.title}
          </h1>
          <h1 className="mb-3">
            <time
              dateTime={post.pubDate}
              className="mb-1 text-xs text-gray-600">
              Published: {format(parseISO(post.pubDate), "LLLL d, yyyy")}
            </time>
          </h1>
          <div className="flex items-center">
            <div>
              <img
                className="rounded-full"
                src={post.profilePicture}
                alt={post?.author}
                width={30}
                height={30}
              />
              <h2 className="font-mono font-medium group-hover:underline">
                <span className="text-xs text-gray-600">Written by:</span>{" "}
                {post.author}
              </h2>
            </div>
          </div>
          <MarkdownRenderer content={post.body.raw} />
          <div className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
