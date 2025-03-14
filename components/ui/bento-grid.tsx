import Link from "next/link"; // Import Link from Next.js
import { cn } from "@/lib/utils";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link, // New link prop
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string; // New link prop (optional)
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-neutral-200 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-4">
          {description}
        </div>
      </div>
      <div className="mt-auto">
        {link ? (
          <Link href={link}>
            <span className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-200 text-center block">
              View More
            </span>
          </Link>
        ) : (
          <button className="w-full py-2 px-4 bg-gray-500 cursor-not-allowed text-white rounded-md">
            No Link Available
          </button>
        )}
      </div>
    </div>
  );
};
