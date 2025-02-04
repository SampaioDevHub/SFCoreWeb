"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import { navigationItems } from "@/src/data/navItem"
import Link from "next/link"

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Fique Conectado</h2>
            <p className="mb-6 text-muted-foreground">
              Assine nossa newsletter para receber atualizações e ofertas exclusivas.
            </p>
            <form className="relative">
              <Input type="email" placeholder="Digite seu e-mail" className="pr-12" />
              <Button type="submit" size="icon" className="absolute right-1 top-1 h-8 w-8 rounded-full">
                <Send className="h-4 w-4" />
                <span className="sr-only">Inscrever-se</span>
              </Button>
            </form>
          </div>

          <div>
            <div className="flex flex-wrap gap-8 text-sm">
              {navigationItems.map((item) => (
                <div key={item.title} className="flex flex-col min-w-[120px]">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  {item.items?.map((subItem) => (
                    <Link key={subItem.title} href={subItem.href} className="text-base hover:text-primary">
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Entre em Contato</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Vila Andrade - Morumbi, 456</p>
              <p>São Paulo, SP - 05724-003</p>
              <p>Telefone: (11) 98125-4861</p>
              <p>Email: contato@sampaioforce.com</p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Siga-nos</h3>
            <div className="mb-6 flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">Rede Social</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Siga-nos</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 SampaioForce. Todos os direitos reservados.</p>
          <nav className="flex gap-4 text-sm">
            {["Política de Privacidade", "Termos de Serviço", "Configurações de Cookies"].map((text, index) => (
              <a key={index} href="#" className="hover:text-primary">
                {text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
