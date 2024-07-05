"use client";
import { FC, HTMLAttributes, useState } from "react";
import {
  PorfolioCardBase,
  PortfolioCardContent,
  PortfolioCardFooter,
  PortfolioCardHeader,
  PortfolioCardTitle,
  TechVariants,
} from "../ui/portfolio-card";
import { cn } from "@/lib/utils";
import { ImageProps } from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export type PortfolioCardProps = {
  title: string;
  fakeHover?: boolean;
  techsUsed?: TechVariants[];
  link?: string;
  updatedAt: string;
  homepage?: string;
} & HTMLAttributes<HTMLDivElement> &
  ImageProps;

const PortfolioCard: FC<PortfolioCardProps> = ({
  title,
  src,
  className,
  techsUsed,
  updatedAt,
  link,
  fakeHover,
  homepage,
  ...props
}) => {
  const [hover, setHover] = useState(!!fakeHover ?? false);

  return (
    <PorfolioCardBase
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(!!fakeHover ?? false)}
      className={cn(className)}
      style={hover ? { zIndex: 10 } : undefined}
      {...props}
    >
      <PortfolioCardHeader>
        <PortfolioCardTitle>{title}</PortfolioCardTitle>
      </PortfolioCardHeader>
      <PortfolioCardContent
        techsUsed={techsUsed}
        hover={hover}
        alt={props.alt}
        src={src}
        className={
          !hover
            ? "filter brightness-[.3] transform transition-all duration-500"
            : "transform brightness-1 duration-500"
        }
      />
      <PortfolioCardFooter
        className={cn(
          "flex flex-row justify-between h-0 p-0 opacity-0",
          hover &&
            "opacity-100 h-16 p-6 transform transition-all duration-500 delay-500 absolute w-full border rounded-br-lg rounded-bl-lg"
        )}
      >
        <p>Editado em: {updatedAt}</p>
        <div className="flex flex-row gap-1">
          {link && (
            <Button variant="outline" size="sm">
              <Link href={link} target="__blank">
                Repo
              </Link>
            </Button>
          )}
          {homepage && (
            <Button variant="outline" size="sm">
              <Link href={homepage} target="__blank">
                Live
              </Link>
            </Button>
          )}
        </div>
      </PortfolioCardFooter>
    </PorfolioCardBase>
  );
};

export default PortfolioCard;
