import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const LinkedinLogo = () => (
  <svg aria-hidden="true" width="24" height="24"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
)

export const Linkedin = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <a target="_blank" referrerPolicy="no-referrer" className="flex items-center gap-1" href="https://www.linkedin.com/in/joao-victor-dsc/">
            <LinkedinLogo /> @joao-victor-dsc
          </a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={'https://media.licdn.com/dms/image/v2/C4D03AQF1DwvSDak8Ug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1638928821377?e=1742428800&v=beta&t=T_ltCi9Zh9gXueubcmxyJihYtQfl9MxUZC1CN-dEc-8'} />
            <AvatarFallback>JV</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex justify-between">
              <h4 className="text-sm font-semibold">
                João victor Dos santos
              </h4>
            </div>
            <p className="text-sm">
              Fullstack developer at Mutant | Node.js | CI/CD | Typescript | React | AWS | SEO | Core Web Vitals | Frontend | Backend | Vim
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
