"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import Link from "next/link"
import { footerItems } from "../data/footerItem"

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Fique Conectado</h2>
            <p className="text-muted-foreground">
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

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {footerItems.map((item) => (
              <div key={item.title}>
                <h4 className="mb-2 font-semibold">{item.title}</h4>
                <div className="flex flex-col space-y-2">
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Entre em Contato</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>Vila Andrade - Morumbi, 456</p>
              <p>São Paulo, SP - 05724-003</p>
              <p>Telefone: (11) 98125-4861</p>
              <p>Email: contato@sampaioforce.com</p>
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Siga-nos</h3>
            <div className="flex space-x-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
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

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>© 2025 SampaioForce. Todos os direitos reservados.</p>
          <nav className="flex gap-4">
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

