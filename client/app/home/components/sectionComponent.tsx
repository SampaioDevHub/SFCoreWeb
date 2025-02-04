import Image from "next/image";
import Back from "@/public/10258312.jpg"

export default function SectionComponent() {
    return (
        <section className="relative overflow-hidden">
            <div className="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div>
                        <p className="text-sm leading-normal font-bold uppercase text-accent-600">
                            SampaioForce
                        </p>
                        <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-base-900">
                            Transformando o futuro com software, serviços e consultoria
                        </h2>
                        <p className="text-base leading-normal mt-4 text-base-500 font-medium">
                            A SampaioForce está aqui para revolucionar a forma como empresas utilizam tecnologia para alcançar novos patamares.
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mx-auto mt-8">
                            <button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-500/50 h-9 px-4 py-2 text-sm font-medium rounded-md">
                                Comece agora
                            </button>
                            <button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <Image
                            className="object-cover h-full border shadow rounded-2xl"
                            src={Back}
                            alt="Preview do Dashboard"
                        />
                    </div>
                </div>
                <div className="mx-auto grid mt-10 grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:-mx-6 lg:grid-cols-5">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <Image
                            key={num}
                            className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
                            src={Back}
                            alt={`Marca ${num}`}
                            width="158"
                            height="48"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
