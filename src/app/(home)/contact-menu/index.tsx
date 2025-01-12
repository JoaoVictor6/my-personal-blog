import { Github } from "./github"
import { Linkedin } from "./linkedin"

export const ContactMenu = () => {
  return (
    <ul className="flex items-center gap-2">
      <li><Github /></li>
      <li>
        <Linkedin />
      </li>
    </ul>
  )
}
