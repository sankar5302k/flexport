"use client"

import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "AI-Powered Insights",
    description: "Leverage advanced algorithms to gain actionable insights from your data.",
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor key metrics and performance indicators in real-time.",
  },
  {
    title: "Automated Reporting",
    description: "Generate comprehensive reports automatically, saving you time and effort.",
  },
]

const Feature = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <CheckCircle2 className="h-5 w-5 text-green-500" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

const Layer3 = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Layer3

