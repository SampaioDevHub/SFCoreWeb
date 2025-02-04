"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import Image from "next/image"

import Background from "@/public/10258312.jpg" // Substitua pela imagem adequada da SampaioForce
import Background2 from "@/public/10258312.jpg" // Substitua pela imagem adequada da SampaioForce
import Background3 from "@/public/10258312.jpg" // Substitua pela imagem adequada da SampaioForce
import Link from "next/link"

const slides = [
  {
    title: "Soluções de Software para Empresas",
    description:
      "Transforme a gestão da sua empresa com soluções personalizadas e inovadoras para diversos segmentos.",
    image: Background,
  },
  {
    title: "Consultoria e Serviços Personalizados",
    description: "Oferecemos consultoria especializada para otimizar processos e potencializar resultados.",
    image: Background2,
  },
  {
    title: "Transformação Digital e Inovação",
    description: "Implemente tecnologias de ponta e acelere a transformação digital da sua empresa.",
    image: Background3,
  },
]

export default function HeroComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (slide) {
        gsap.to(slide, {
          opacity: index === currentSlide ? 1 : 0,
          zIndex: index === currentSlide ? 1 : 0,
          duration: 1,
        })
      }
    })

    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (index === currentSlide) {
          gsap.fromTo(content, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
        } else {
          gsap.to(content, { opacity: 0, y: -50, duration: 1 })
        }
      }
    })

    imageRefs.current.forEach((image, index) => {
      if (image) {
        if (index === currentSlide) {
          gsap.fromTo(image, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" })
        } else {
          gsap.to(image, { opacity: 0, scale: 1.1, duration: 1 })
        }
      }
    })
  }, [currentSlide])

  return (
    <section className="w-full h-[calc(120vh-4rem)] relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => {
            slideRefs.current[index] = el;
          }}
          className="absolute inset-0"
          style={{
            opacity: index === 0 ? 1 : 0,
            zIndex: index === 0 ? 1 : 0,
          }}
        >
          <Image
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <div ref={(el) => { contentRefs.current[index] = el; }} className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  {slide.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-300">{slide.description}</p>
                <div className="space-x-4 mt-8">
                  <Link href={'/contato'}>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                      Entre em Contato
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
