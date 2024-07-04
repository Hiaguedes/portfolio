"use client"
import { FC, HTMLAttributes, useState } from "react";
import { PorfolioCardBase, PortfolioCardContent, PortfolioCardFooter, PortfolioCardHeader, PortfolioCardTitle } from "../ui/portfolio-card";
import { cn } from "@/lib/utils";
import { ImageProps } from "next/image";
import { Button } from "../ui/button";

type PortfolioCardProps = { 
    title: string;
    fakeHover?: boolean
 } & HTMLAttributes<HTMLDivElement> & ImageProps

const PortfolioCard: FC<PortfolioCardProps> = ({ title, src, className, fakeHover, ...props }) => {

    const [hover, setHover] = useState(!!fakeHover ?? false)

    return (
        <PorfolioCardBase 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(!!fakeHover ?? false)}
        className={cn(className )} 
        style={hover ? { zIndex: 10 }: undefined}
        {...props}
        >
        <PortfolioCardHeader>
          <PortfolioCardTitle>{title}</PortfolioCardTitle>
        </PortfolioCardHeader>
        <PortfolioCardContent hover={hover} alt={props.alt} src={src} className={!hover ? "filter brightness-[.3] transform transition-all duration-500" : "transform brightness-1 duration-500"}/>
          <PortfolioCardFooter className={cn("flex flex-row justify-between h-0 p-0 opacity-0", hover && "opacity-100 h-16 p-6 transform transition-all duration-500 delay-500 absolute w-full border rounded-br-lg rounded-bl-lg")}>
              <p>Editado em: 03/07/2024</p>
              <Button variant="outline" size="sm">Repo</Button>
          </PortfolioCardFooter>
      </PorfolioCardBase>
    )
}

export default PortfolioCard