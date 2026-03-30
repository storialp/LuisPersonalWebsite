import * as Dialog from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;
const SheetPortal = Dialog.Portal;
const SheetTitle = Dialog.Title;
const SheetDescription = Dialog.Description;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof Dialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/65 transition-opacity duration-150 ease-out data-[state=closed]:pointer-events-none data-[state=closed]:opacity-0 data-[state=open]:opacity-100 supports-[backdrop-filter]:bg-black/45 supports-[backdrop-filter]:backdrop-blur-[3px]",
      className,
    )}
    {...props}
  />
));
SheetOverlay.displayName = Dialog.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-[55] bg-transparent opacity-100 outline-none transition-all duration-200 ease-out data-[state=closed]:opacity-0",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 data-[state=closed]:-translate-y-3 data-[state=open]:translate-y-0",
        bottom:
          "inset-x-0 bottom-0 data-[state=closed]:translate-y-3 data-[state=open]:translate-y-0",
        left: "inset-y-0 left-0 h-full data-[state=closed]:-translate-x-3 data-[state=open]:translate-x-0",
        right:
          "inset-y-0 right-0 h-full data-[state=closed]:translate-x-3 data-[state=open]:translate-x-0",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof Dialog.Content>,
    VariantProps<typeof sheetVariants> {
  hideClose?: boolean;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  SheetContentProps
>(({ side = "right", className, children, hideClose = false, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <Dialog.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      {!hideClose ? (
        <Dialog.Close className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/[0.04] p-2 text-text-muted transition-colors hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/40">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      ) : null}
    </Dialog.Content>
  </SheetPortal>
));
SheetContent.displayName = Dialog.Content.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
