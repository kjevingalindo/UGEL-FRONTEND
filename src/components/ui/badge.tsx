import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#192a56] text-white shadow hover:bg-[#192a56]/80",
        secondary:
          "border-transparent bg-[#00d2d3] text-[#192a56] hover:bg-[#00d2d3]/80",
        accent:
          "border-transparent bg-[#2e86de] text-white hover:bg-[#2e86de]/80",
        destructive:
          "border-transparent bg-[#ff4757] text-white shadow hover:bg-[#ff4757]/80",
        outline: "text-[#192a56] border-[#e0e0e0]",
        success:
          "border-transparent bg-[#2ed573] text-white shadow hover:bg-[#2ed573]/80",
        warning:
          "border-transparent bg-[#ffa502] text-white shadow hover:bg-[#ffa502]/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
