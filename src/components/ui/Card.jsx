import React, { forwardRef } from "react";
import clsx from "clsx";  // If you don't have cn utility, replace with clsx

export const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("rounded-lg border bg-white text-gray-900 shadow-sm", className)}
    {...props}
  />
));
Card.displayName = "Card";

export const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx("text-sm text-gray-600", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("p-6 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
