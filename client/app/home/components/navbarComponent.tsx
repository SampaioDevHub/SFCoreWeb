import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { navigationItems } from "@/src/data/navItem";
import LogoDark from "@/public/logo.svg"
import Image from "next/image";

function NavigationMenuItemComponent({ item }: { item: typeof navigationItems[0] }) {
    return (
        <NavigationMenuItem key={item.title}>
            {item.href ? (
                <NavigationMenuLink>
                    <Link href={item.href}>
                        <Button variant="ghost">{item.title}</Button>
                    </Link>
                </NavigationMenuLink>
            ) : (
                <NavigationMenuTrigger className="font-medium text-sm" aria-haspopup="true">
                    {item.title}
                </NavigationMenuTrigger>
            )}
            {item.href || (
                <NavigationMenuContent className="!w-[450px] p-4">
                    <DesktopSubMenu item={item} />
                </NavigationMenuContent>
            )}
        </NavigationMenuItem>
    );
}

function DesktopSubMenu({ item }: { item: typeof navigationItems[0] }) {
    return (
        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col">
                    <p className="text-base">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {/* Verificando se o item é "Comunidade", "Serviços" ou "Empresa" para adicionar o botão */}
                {item.title === "Comunidade" && (
                    <Button size="sm" className="mt-10">Participar da Comunidade</Button>
                )}
                {item.title === "Serviços" && (
                    <Button size="sm" className="mt-10">Ver Serviços</Button>
                )}
                {item.title === "Empresa" && (
                    <Button size="sm" className="mt-10">Saiba Mais Sobre a Empresa</Button>
                )}
            </div>
            <div className="flex flex-col text-sm h-full justify-end">
                {item.items?.map((subItem) => (
                    <NavigationMenuLink
                        href={subItem.href}
                        key={subItem.title}
                        className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                    >
                        <span>{subItem.title}</span>
                        <MoveRight className="w-4 h-4 text-muted-foreground" />
                    </NavigationMenuLink>
                ))}
            </div>
        </div>
    );
}

function MobileNavigation() {
    return (
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" aria-label="Abrir menu móvel">
                        <Menu className="w-6 h-6" /> {/* Ajuste o ícone para um tamanho maior  */}
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className="w-[75vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] bg-white"
                >
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>Navegue pelas opções</SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col gap-4">
                        {navigationItems.map((item) => (
                            <div key={item.title}>
                                <div className="flex flex-col gap-4">
                                    {item.href ? (
                                        <Link href={item.href} className="text-lg font-semibold">
                                            <span>{item.title}</span>
                                        </Link>
                                    ) : (
                                        <p className="text-lg font-semibold">{item.title}</p>
                                    )}
                                    {item.items?.map((subItem) => (
                                        <Link
                                            key={subItem.title}
                                            href={subItem.href}
                                            className="text-muted-foreground text-sm"
                                        >
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <SheetClose asChild>
                        <Button variant="ghost" aria-label="Fechar menu">Fechar</Button>
                    </SheetClose>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export function NavbarComponent() {
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background backdrop-blur-md bg-opacity-40 bg-[#d4d4d4] shadow-md rounded-none px-4 sm:px-6">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItemComponent key={item.title} item={item} />
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center mx-auto">
                    <Image src={LogoDark} priority width={295} height={295} alt="LogoDark" />
                </div>
                <div className="flex justify-end w-full gap-4">
                    {/* Botão de agendar uma consultoria fora do submenu */}
                    <Button variant="ghost" className="hidden md:inline" aria-label="Agendar Consultoria">
                        Agendar uma Consultoria
                    </Button>
                    <div className="border-r hidden md:inline"></div>
                    <Button variant="outline" aria-label="Entrar na conta">Entrar</Button>
                    <Button aria-label="Começar agora">Começar Agora</Button>
                </div>
                <MobileNavigation />
            </div>
        </header>
    );
}