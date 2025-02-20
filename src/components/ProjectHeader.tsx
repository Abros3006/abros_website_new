import { cn } from "@/lib/utils"
import React from "react"

interface ProjectHeaderProps extends React.ComponentProps<"header"> {
  /**
   * Optional className for custom styling
   */
  className?: string
}

const ProjectHeader = ({ children, className, ...props }: ProjectHeaderProps) => {
  return (
    <header
      {...props}
      className={cn(
        // Layout
        "w-full px-28",
        "mb-10 md:mb-16",
        
        // Heading styles
        "[&_h1]:text-4xl sm:[&_h1]:text-5xl md:[&_h1]:text-6xl",
        "[&_h1]:font-bold",
        "[&_h1]:leading-tight",
        "[&_h1]:m-0 [&_h1]:mb-4",
        
        // Paragraph styles
        "[&_p]:text-xl sm:[&_p]:text-2xl md:[&_p]:text-3xl",
        "[&_p]:leading-relaxed",
        "[&_p]:text-muted-foreground",
        
        // Strong/emphasis styles within header
        "[&_strong]:text-primary",
        "[&_strong]:font-semibold",
        
        className
      )}
    >
      {children}
    </header>
  )
}

export default ProjectHeader