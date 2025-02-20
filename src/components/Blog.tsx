import { cn } from "@/lib/utils"
import React from "react"

interface BlogProps extends React.ComponentProps<"article"> {
  /**
   * Optional custom className for the container
   */
  containerClassName?: string
}

const Blog = ({ 
  children, 
  containerClassName,
  className,
  ...props 
}: BlogProps) => {
  return (
    <div className={cn(
      "container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl", 
      containerClassName
    )}>
      <article
        {...props}
        className={cn(
          // Article layout
          "prose prose-lg dark:prose-invert mx-auto",
          "my-8 md:my-12",
          
          // Headings
          "prose-headings:text-center",
          "prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:font-bold prose-h1:mb-8",
          "prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6",
          "prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-8 prose-h3:mb-4",
          
          // Paragraphs
          "prose-p:text-justify",
          "prose-p:text-lg md:prose-p:text-xl",
          "prose-p:leading-relaxed",
          
          // Lists
          "prose-ul:pl-6 prose-ul:list-disc",
          "prose-ol:pl-6 prose-ol:list-decimal",
          "prose-li:my-2",
          
          // Blockquotes
          "prose-blockquote:border-l-primary",
          "prose-blockquote:text-muted-foreground",
          "prose-blockquote:italic",
          
          // Code blocks
          "prose-pre:bg-muted prose-pre:text-muted-foreground",
          "prose-pre:p-4 prose-pre:rounded-lg",
          "prose-pre:overflow-x-auto",
          
          // Inline code
          "prose-code:font-mono prose-code:text-sm",
          "prose-code:bg-muted prose-code:text-muted-foreground",
          "prose-code:px-1 prose-code:rounded",
          
          // Images
          "prose-img:mx-auto prose-img:rounded-lg",
          "prose-img:shadow-md",
          
          // Links
          "prose-a:text-primary prose-a:underline",
          "prose-a:underline-offset-4",
          "hover:prose-a:text-primary/80",
          
          // Tables
          "prose-table:w-full",
          "prose-th:bg-muted prose-th:p-2",
          "prose-td:p-2",
          "prose-td:border prose-td:border-muted",
          
          // Custom className override
          className
        )}
      >
        {children}
      </article>
    </div>
  )
}

export default Blog