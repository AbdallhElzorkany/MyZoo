import Image from 'next/image'
const Hero = () => {
  return (
            <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
              <div className="container px-4 md:px-6 m-auto">
                <div className="grid items-center gap-10 lg:grid-cols-2 ">
                  <div className="space-y-4 md:m-auto not-lg:text-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-green-800">
                      Caring for your pets like family
                    </h1>
                    <p className="max-w-[600px]  text-gray-600 md:text-xl">
                      MyZoo Veterinary Clinic provides comprehensive care for all
                      your furry, feathered, and scaly friends with compassion and
                      expertise.
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <Image
                      src="/pexels-tdcat-59523.jpg"
                      alt="Veterinarian with pets"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Hero