export default function AboutPage() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-48 lg:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Global Insight Enterprises, conoce tu mundo.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Somos una empresa pionera y dinámica dedicada a proporcionar conocimientos integrales e información detallada sobre cada país en todo el mundo. Nuestra misión es capacitar a empresas, gobiernos e individuos con la información necesaria para tomar decisiones informadas, fomentar la comprensión global y promover un cambio positivo..
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
