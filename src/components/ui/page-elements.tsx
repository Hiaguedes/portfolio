'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import React, { FC } from "react"
import { Button } from "./button"
import { LucideChevronLeft, LucideMenu } from "lucide-react"
import personalInfo from 'hiaguedes/info.json'
import { useRouter } from "next/navigation"
import { LinkText } from "./typography"

export const Main = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({className, children, ...props}, ref) => {
    return <main ref={ref} className={cn(className, "flex-1 overflow-y-auto")} {...props}>{children}</main>
})
Main.displayName = "Main"

export const Section = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        id: string;
    }
>(({className, children, id, ...props}, ref) => {
    return <section ref={ref} id={id} className={cn(className, "w-full flex flex-col px-12 py-10")} {...props}>{children}</section>
});
Section.displayName = "Section"

type HeaderProps = {
    goBack?: boolean;
}
export const Header:FC<HeaderProps> = ({ goBack }) => {
    const { back } = useRouter();
    const linkCurriculum =
  "https://goldenrod-ocelot-343.notion.site/Hiago-Guedes-Curriculum-729abc1fc9ae4876a06897ce7b4d2469";
  
    return (
        <header className="flex justify-between items-center flex-row w-full border-b-2 border-yellow-300 p-5 h-auto sticky top-0 z-10">
        <div className="flex flex-row gap-2">
            {goBack && <LucideChevronLeft className="cursor-pointer" onClick={back} />}
            <LucideMenu className="cursor-pointer" />
        </div>
        <div>
          <Button>
            <Link href={linkCurriculum} target="__blank">
              Baixar Curriculo
            </Link>
          </Button>
        </div>
      </header>
    )
}
Header.displayName = "Header"

export const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className,  ...props }, ref) => {
    
    return (
    <footer    
    ref={ref}
    className={cn(
      "w-full px-12 py-8 bg-zinc-800 m-0 mt-4",
      className
    )}
    {...props}
    >
        <p>Desenvolvido por {personalInfo.name}, clique <LinkText variant="emphasis" href="/about">aqui</LinkText> pra saber mais detalhes desse projeto</p>
    </footer>
)});

Footer.displayName = "Footer"