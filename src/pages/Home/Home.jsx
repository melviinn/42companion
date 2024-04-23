"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/utils/cn";
import { BookCopy, FolderOpenDot, Settings, UsersRound } from "lucide-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Projects Utilities",
    description: (
      <>
        <span className="text-sm">
          Get an overview of all projects, a detailed graph and associated
          testers.
        </span>
      </>
    ),
    header: <Skeleton />,
    href: "/projects",
    className: "md:col-span-2",
    icon: <FolderOpenDot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "42's Students",
    description: (
      <>
        <span className="text-sm">
          Get a list of all the students and informations about them.
        </span>
      </>
    ),
    header: <Skeleton />,
    href: "/students",
    className: "md:col-start-3",
    icon: <UsersRound className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Settings",
    description: (
      <span className="text-sm">Personalize the UI and account settings.</span>
    ),
    header: <Skeleton />,
    href: "/settings",
    className: "md:row-start-2",
    icon: <Settings className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Guidebooks",
    description: (
      <span className="text-sm">
        A list of useful guides to guide you through your projects.
      </span>
    ),
    header: <Skeleton />,
    href: "/guidebooks",
    className: "md:col-span-2",
    icon: <BookCopy className="h-4 w-4 text-neutral-500" />,
  },
];

const Home = () => {
  return (
    <div className="home">
      <BentoGrid className="max-w-3xl mx-auto md:auto-rows-[16rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            href={item.href}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Home;
