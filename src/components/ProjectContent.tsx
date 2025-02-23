import { cn } from "@/lib/utils"
import React from "react"

interface ProjectContentProps extends React.ComponentProps<"article"> {
  /**
   * Optional custom className for the container
   */
  containerClassName?: string
}

const ProjectContent = ({ 
  children, 
  containerClassName,
  className,
  ...props 
}: ProjectContentProps) => {
  return (
    <div className={cn("w-full justify-end", containerClassName)}>
      <article
        {...props}
        className={cn(
          // Layout - responsive padding
          "px-4 sm:px-8 md:px-16 lg:px-28 mb-8 md:mb-12",
          
          // Typography for headings
          "[&_h2]:text-2xl md:[&_h2]:text-3xl",
          "[&_h3]:text-lg md:[&_h3]:text-xl",
          "[&_h3]:font-semibold",
          "[&_h3]:text-background [&_h2]:bg-primary",
          "[&_h3]:py-1.5 md:[&_h3]:py-2 [&_h2]:px-3 md:[&_h2]:px-4",
          "[&_h3]:rounded-md",
          "[&_h3]:mb-4 md:[&_h3]:mb-6",
          
          // Typography for paragraphs  
          "[&_p]:text-base md:[&_p]:text-lg lg:[&_p]:text-xl",
          "[&_p]:leading-relaxed md:[&_p]:leading-8",
          "[&_p]:text-foreground",
          "[&_p]:px-1 md:[&_p]:px-2 [&_p]:my-3 md:[&_p]:my-4",

          // List styles - adjusted margins for mobile
          "[&_ul]:list-disc [&_ul]:ml-4 md:[&_ul]:ml-6",
          "[&_ol]:list-decimal [&_ol]:ml-4 md:[&_ol]:ml-6",
          "[&_li]:my-1.5 md:[&_li]:my-2",

          // Link styles
          "[&_a]:text-primary [&_a]:underline",
          "[&_a:hover]:text-primary/80",
          
          // Code block styles - adjusted padding for mobile
          "[&_pre]:bg-muted [&_pre]:text-muted-foreground",
          "[&_pre]:p-3 md:[&_pre]:p-4 [&_pre]:rounded-md",
          "[&_pre]:my-3 md:[&_pre]:my-4 [&_pre]:overflow-x-auto",
          
          // Inline code styles - adjusted text size for mobile
          "[&_code]:font-mono [&_code]:text-xs md:[&_code]:text-sm",
          "[&_code]:bg-muted [&_code]:text-muted-foreground",
          "[&_code]:px-1 [&_code]:rounded",
          
          // Custom className override
          className
        )}
      >
        {children}
      </article>
    </div>
  )
}

export default ProjectContent