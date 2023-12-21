import { useMemo } from "react";
import { unified } from "unified";
import markdown from "remark-parse";
import { visit } from "unist-util-visit";
import { slugify } from "lib/utils";

// Define the type for the TOC item
type TocItem = {
  id: string;
  text: string;
  level: number;
};

const useMarkdownToc = (markdownContent: string): TocItem[] => {
  const toc: TocItem[] = useMemo(() => {
    const headings: TocItem[] = [];
    const processor = unified().use(markdown, { commonmark: true });

    const tree = processor.parse(markdownContent);
    visit(tree, "heading", (node: any) => {
      const children = node.children as { type: string; value: string }[];
      const text = children
        .filter((n) => n.type === "text")
        .map((n) => n.value)
        .join("");
      const id = slugify(text);

      headings.push({
        id: `#${id}`,
        text,
        level: node.depth,
      });
    });
    // Filter out the Table of Contents heading itself
    return headings.filter(
      (heading) => heading.text.toLowerCase() !== "table of contents"
    );
  }, [markdownContent]);

  return toc;
};

export default useMarkdownToc;
