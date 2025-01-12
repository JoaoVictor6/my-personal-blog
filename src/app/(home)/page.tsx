import { ContactMenu } from "./contact-menu";
import { HeroBackground } from "./hero-background"
import { LanguageSelector } from "./language-selector";

const CURRICULUM_LINK = "https://docs.google.com/document/d/19TDROTN_JwutPr1cBGdlVz2RzwDrrPuA/edit?usp=sharing&ouid=117801338461428544744&rtpof=true&sd=true";
export default function Page() {
  return (
    <>
      <main className="bg-black h-screen relative">
        
        <div className="h-full w-full absolute bottom-0 flex items-center justify-center flex-col">
          <div className="absolute right-4 top-4">
            <LanguageSelector />
          </div>
          <h1 className="text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            João Victor
          </h1>
          <p className="text-lg font-semibold text-white">
            Desenvolvedor fullstack
          </p>
          <a 
            href={CURRICULUM_LINK} 
            className="mt-2 relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:text-black dark:bg-white"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Currículo
          </a>
          <ContactMenu />
        </div>
        <div className="z-0 h-full">
          <HeroBackground {...{
            direction: 'diagonal',
            speed: 0.1,
            borderColor: '#999',
            squareSize: 40,
            hoverFillColor: '#222',
          }} />
        </div>
      </main>
    </>
  )
}
