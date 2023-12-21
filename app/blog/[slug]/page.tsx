// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import MarkdownRenderer from "components/MarkdownRenderer";
import Image from "next/image";
import useMarkdownToc from "components/TocRenderer";
import { insertPromotions } from "components/insertPromotion";
import { calculateReadTime } from "lib/utils";
import fs from "fs";
import matter from "gray-matter";
import { convertToISO } from "lib/utils";

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

const getPostContent = (slug: string) => {
  try {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return {
      content: matterResult.content,
      postMeta: {
        slug: file.replace(".md", ""),
        title: matterResult.data.title,
        description: matterResult.data.description,
        pubDate: matterResult.data.pubDate,
        heroImage: matterResult.data.heroImage,
        author: matterResult.data.author,
        authorBio: matterResult.data.authorBio,
        profilePicture: matterResult.data.profilePicture,
      },
    };
  } catch (e) {
    console.log(e);
  }
};
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = getPostContent(params.slug);
  const toc = useMarkdownToc(post?.content as string);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  // const markdownWithPromotions = insertPromotions(post.body.raw, promotions);
  const markdownWithPromotions = insertPromotions(post.content, promotions);

  return (
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
            {post.postMeta.title}
          </h1>
          <div className="flex items-center mt-6">
            <Image
              className="rounded-full border-2 border-white shadow-lg"
              src={post?.postMeta?.profilePicture}
              alt={post?.postMeta?.author}
              width={50}
              height={50}
            />
            <div
              className="ml-4"
              style={{ lineHeight: "1.78", fontSize: "1.125rem" }}
            >
              <h2 className="font-semibold">{post?.postMeta?.author}</h2>
              <p className="text-sm">{post?.postMeta?.authorBio}</p>
              <div className="absolute top-2 left-2">
                <p className="text-xs mt-2 rounded text-white">
                  {format(
                    parseISO(convertToISO(post?.postMeta?.pubDate)),
                    "LLLL d, yyyy"
                  )}{" "}
                  · {calculateReadTime(post?.content, 200)} min read
                </p>
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
                  {post.postMeta.description}
                </p>
                {post.postMeta.heroImage && (
                  <Image
                    className="mx-auto rounded-md"
                    src={post.postMeta.heroImage}
                    alt={post.postMeta.title}
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
      </div>
    </div>
  );
};

export default PostLayout;
