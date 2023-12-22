import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import React from "react";
import { slugify } from "@/lib/utils";
import rehypeRaw from "rehype-raw";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const headingRenderer = (level: number) => {
    // eslint-disable-next-line react/display-name
    return ({ children, ...props }: any) => {
      const text = React.Children.toArray(children).join("");
      const id = slugify(text);

      let className = "";
      switch (level) {
        case 1:
          className = "font-bold lg:text-3xl text-2xl my-5";
          break;
        case 2:
          className = "font-bold lg:text-2xl text-xl my-5";
          break;
        case 3:
          className = "font-bold lg:text-xl text-lg my-5";
          break;
        case 4:
          className = "font-bold lg:text-lg text-md my-5";
          break;
        case 5:
          className = "font-bold lg:text-md text-md my-5";
          break;
        case 6:
          className = "font-bold text-sm my-8";
          break;
      }

      return React.createElement(
        `h${level}`,
        { id, className, ...props },
        children
      );
    };
  };
  return (
    <article className="prose max-w-none leading-normal prose-headings:font-medium">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        className="mb-8"
        components={{
          h1: headingRenderer(1),
          h2: headingRenderer(2),
          h3: headingRenderer(3),
          h4: headingRenderer(4),
          h5: headingRenderer(5),
          h6: headingRenderer(6),
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

          ul: ({ node, ...props }) => (
            <ul
              className="list-disc pl-5"
              style={{
                marginLeft: "10px",
                lineHeight: "1.75",
                fontFamily:
                  "'Lexend Deca', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "1.1rem",
                color: "#213343",
              }}
              {...props}
            />
          ),

          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal pl-5"
              style={{
                marginLeft: "10px",
                fontFamily:
                  "'Lexend Deca', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                lineHeight: "1.70",
                fontSize: "1.1rem",
                color: "#213343",
              }}
              {...props}
            />
          ),

          li: ({ node, ...props }) => (
            <li
              className="mb-2 text-base leading-relaxed"
              style={{
                marginLeft: "10px",
                lineHeight: "1.70",
                fontFamily:
                  "'Lexend Deca', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "1.1rem",
                color: "#213343",
              }}
              {...props}
            />
          ),
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

            return (
              <p
                className="mb-6"
                style={{
                  fontFamily:
                    "'Lexend Deca', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  lineHeight: "1.70",
                  fontSize: "1.1rem",

                  color: "#213343",
                }}
                {...props}
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
