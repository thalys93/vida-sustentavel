import { Hero } from "@/components/sections/Hero"
import { Trust } from "@/components/sections/Trust"
import { Pillars } from "@/components/sections/Pillars"
import { Urgency } from "@/components/sections/Urgency"
import { Author } from "@/components/sections/Author"
import { ContactCta } from "@/components/sections/ContactCta"

export function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Pillars />
      <Urgency />      
      <Author />
      <ContactCta />
    </>
  )
}
