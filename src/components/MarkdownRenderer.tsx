import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose max-w-none leading-normal prose-headings:font-medium">
      <ReactMarkdown
        className="mb-8"
        components={{
          img: ({ node: _node, src, alt, ...props }: any) => {
            if (typeof src === "string") {
              return (
                <Image
                  className="my-4 mx-auto"
                  alt={alt ?? "markdown image"}
                  {...props}
                  width={920}
                  height={640}
                  src={src}
                />
              );
            } else {
              return null;
            }
          },
          p: ({ node, ...props }: any) => {
            const str = props.children[0]?.toString() ?? "";
            // if tweet use tweet embed
            if (str.startsWith("%[https://twitter.com/")) {
              // ['%[https://twitter.com/neorepo/status/1636728548080713728?s=20]'] -> tweetId = 1636728548080713728
              const tweetUrl = str.slice(2, -1);
              const tweetId = tweetUrl.split("/").pop()?.split("?")[0];

              if (typeof tweetId === "string") {
                return <TwitterTweetEmbed tweetId={tweetId} />;
              } else {
                return <div>Error showing tweet</div>;
              }
            }

            // if image use next image
            if (str.startsWith("![](")) {
              const imageUrl = str.slice(4, -1).split(" ")[0];
              if (imageUrl) {
                return (
                  <Image
                    src={imageUrl}
                    alt={""}
                    width={920}
                    height={640}
                    className="mx-auto"
                  />
                );
              } else {
                return <div>Error showing image</div>;
              }
            }

            return <p {...props} />;
          },
          h1: ({ node, ...props }: any) => (
            <h1 className="font-bold lg:text-3xl text-2xl my-8" {...props} />
          ),
          h2: ({ node, ...props }: any) => (
            <h2 className="font-bold lg:text-2xl text-xl my-8" {...props} />
          ),
          h3: ({ node, ...props }: any) => (
            <h3 className="font-bold lg:text-xl text-lg my-8" {...props} />
          ),
          h4: ({ node, ...props }: any) => (
            <h4 className="font-bold lg:text-lg text-md my-8" {...props} />
          ),
          h5: ({ node, ...props }: any) => (
            <h5 className="font-bold lg:text-md text-md my-8" {...props} />
          ),
          h6: ({ node, ...props }: any) => (
            <h6 className="font-bold text-sm my-8" {...props} />
          ),
        }}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
