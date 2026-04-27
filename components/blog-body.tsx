"use client";

import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type BlogBodyProps = {
  content: string;
};

export function BlogBody({ content }: BlogBodyProps) {
  return (
    <div className="prose mt-10">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ href, children }) => (
            <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
              {children}
            </a>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
