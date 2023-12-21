import { format, parseISO } from "date-fns";
import Image from "next/image";
import { convertToISO } from "lib/utils";

const PostCard = (post: any) => {
  function truncateDescription(description: string, wordLimit: number) {
    // Split the description into an array of words
    const words = description.split(" ");

    // If the number of words in the description is less than or equal to the word limit,
    // return the original description
    if (words.length <= wordLimit) return description;

    // Otherwise, return the first 'wordLimit' words joined by a space and add an ellipsis at the end
    return `${words.slice(0, wordLimit).join(" ")}...`;
  }
  return (
    <div className="w-full sm:w-1/3 mb-4 sm:px-4 sm:py-4 xs:mb-6 xs:m-6">
      <div className="card mx-auto md:max-w-[400px] sm:max-w-[350px] xl:sm:max-w-[400px] flex flex-col overflow-hidden">
        <div className="overflow-hidden flex-1">
          <Image
            src={post.heroImage}
            alt="image"
            height={100}
            width={100}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className=" flex-1 items-center">
          <div className="flex items-center mb-2 mt-4">
            <span className="ml-2 inline-block rounded-full py-1 text-center text-sm">
              <time
                dateTime={post.pubDate}
                className="mb-1 text-xs text-gray-600"
              >
                Published:{" "}
                {format(parseISO(convertToISO(post.pubDate)), "LLLL d, yyyy")}
              </time>
            </span>
          </div>
          <h3>
            <a
              href={`/blog/${post.slug}/`}
              className="text-dark hover:text-primary mb-2 inline-block text-md font-bold"
            >
              {post.title}
            </a>
          </h3>
          <p className="text-body-color text-sm mb-2 text-slate-700">
            {truncateDescription(post.description, 15)}
          </p>
          <div className="flex items-center mt-4">
            <Image
              height={100}
              width={100}
              src={post.profilePicture}
              alt="Author"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <span className="text-dark font-semibold text-sm">
                {post.author}
              </span>
              <p className="text-body-color text-xs">{post.authorBio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
