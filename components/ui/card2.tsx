"use client";
import { cn } from "@/lib/cn";
import React, { ReactNode } from "react";
import Image from "next/image";

interface Card2Props extends React.HTMLProps<HTMLDivElement> {
  title: string;
  subTitle: string;
  icon: string;
}

export const Card2 = ({
  className,
  children,
  title,
  subTitle,
  icon,
  ...props
}: Card2Props) => {
  return (
    <main>
      <div
        className={cn(
          "flex flex-col m-auto border-[0.5px] p-0 border-[rgba(255,255,255,0.1)] backdrop-blur-[10px] flex-1",
          className
        )}
        {...props}
      >
        <div className="p-8 h-full">
          <Image
            src="/icons/CardDots.svg"
            alt="Card dots"
            width="292"
            height="66"
            className="absolute top-0 right-0"
            style={{ width: "70%", userSelect: "none" }}
          />
          <div className="flex relative ">
            <Image
              src={`/icons/${icon}.svg`}
              className="w-6 h-6"
              alt=""
              width="64"
              height="64"
            />
          </div>
          <div className="flex flex-col justify-center align-center text-white">
            <h3>{title}</h3>
            <p className="opacity-75 text-sm pt-3">{subTitle}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
