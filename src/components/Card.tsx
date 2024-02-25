"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
interface Project {
  name: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
}
export function Card() {
  return (
    <section id="projects" className="transition duration-500 ease-in-out">
      <div className="py-12">
        <div>
          <div className="text-center">
            <h2 className="text-3xl   font-semibold tracking-wide uppercase">
              All Projects
            </h2>
          </div>
        </div>
        <div className="mt-10 mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {projectsData.map((project: Project) => (
              <div key={project.name} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <Image
                    src={project.imageUrl}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                  />
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {project.name}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow my-2">
                      {project.description}
                    </p>
                    <Link target="_blank" href={project.liveUrl}>
                      Live Link
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
