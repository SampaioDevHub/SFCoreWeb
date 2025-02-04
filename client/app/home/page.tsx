import { FeaturesSectionWithHoverEffects } from "@/app/home/components/feature-section";
import Head from "next/head";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BackgroundPaths from "./components/background-paths";

export default function HomePage() {
    return (
        <>
            {/* 🏷️ SEO e Metadados 🏷️ */}
            <Head>
                <title>Home | SampaioForce</title>
                <meta name="description" content="Bem-vindo à SampaioForce! Oferecemos soluções tech para seu negócio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* 🔥 Estrutura Principal 🔥 */}
            <section>
                <BackgroundPaths />
            </section>

            {/* Seção de Características com Cartão */}
            <section className="flex flex-col items-center justify-center py-16">
                <div className="max-w-7xl w-full rounded-md">
                    <CardHeader className="text-center">
                        <CardTitle className="text-4xl font-bold text-black">
                            Inovação e Tecnologia para o Sucesso do Seu Negócio
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600 mt-2">
                            Software, serviços e consultoria para impulsionar negócios com tecnologia.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FeaturesSectionWithHoverEffects />
                    </CardContent>
                </div>
            </section>
        </>
    );
}
