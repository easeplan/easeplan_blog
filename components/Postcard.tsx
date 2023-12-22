import { format, parseISO } from "date-fns";
import Image from "next/image";
import { convertToISO } from "@/lib/utils";

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
    <div className="w-full sm:w-1/3 mb-10 sm:px-2 xs:mb-6">
      <div className="card mx-auto flex flex-col overflow-hidden">
        <div className="overflow-hidden">
          <Image
            src={post.heroImage}
            alt="image"
            height={400} // Adjust the height as needed
            width={500} // Adjust the width as needed
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="flex-1 items-center pt-2">
          <div className="mb-2">
            <time dateTime={post.pubDate} className="text-xs text-gray-600">
              Published:{" "}
              {format(parseISO(convertToISO(post.pubDate)), "LLLL d, yyyy")}
            </time>
          </div>
          <h3>
            <a
              href={`/blog/${post.slug}/`}
              className="text-dark hover:text-primary text-xl font-bolder"
            >
              {post.title}
            </a>
          </h3>
          <p className="text-body-color text-md mb-2 mt-2 text-slate-700">
            {truncateDescription(post.description, 15)}
          </p>
          <div className="flex items-center">
            <Image
              height={40} // Adjust the height as needed
              width={40} // Adjust the width as needed
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
