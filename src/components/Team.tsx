import Image from "next/image";
const Team = () => {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-green-800">
              Meet Our Veterinarians
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our experienced team of veterinarians and staff are dedicated to
              providing the best care for your pets.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="border-green-100 rounded-2xl border-1 shadow-green-100 hover:shadow-md shadow-sm transition-shadow">
            <div className="p-6">
              <div className="aspect-square overflow-hidden rounded-full border-green-600 border-2 ">
                <Image
                  src="/jon.jpg"
                  alt="Dr. Sarah Johnson"
                  width={600}
                  height={600}
                  className="object-cover md:max-w-[300px] md:max-h-[300px]"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-green-800">
                  Dr. Bob Johnson
                </h3>
                <p className="text-sm text-green-600">Chief Veterinarian</p>
                <p className="mt-2 text-gray-600">
                  Dr. Johnson has over 15 years of experience in small animal
                  medicine and surgery.
                </p>
              </div>
            </div>
          </div>
          <div className="border-green-100 rounded-2xl border-1 shadow-green-100 hover:shadow-md shadow-sm transition-shadow">
            <div className="p-6">
              <div className="aspect-square border-green-600 border-2 overflow-hidden rounded-full">
                <Image
                  src="/dr_Michael.png"
                  alt="Dr. Michael Chen"
                  width={600}
                  height={600}
                  className="object-cover  md:max-w-[300px] md:max-h-[300px]"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-green-800">
                  Dr. Michael Chen
                </h3>
                <p className="text-sm text-green-600">Veterinary Surgeon</p>
                <p className="mt-2 text-gray-600">
                  Specializing in orthopedic surgery, Dr. Chen brings advanced
                  surgical skills to our clinic.
                </p>
              </div>
            </div>
          </div>
          <div className="border-green-100 rounded-2xl border-1 shadow-green-100 hover:shadow-md shadow-sm transition-shadow">
            <div className="p-6">
              <div className="aspect-square overflow-hidden rounded-full border-green-600 border-2">
                <Image
                  src="/rod.jpg"
                  alt="Dr. Green Rodriguez"
                  width={600}
                  height={600}
                  className="object-cover md:max-w-[300px] md:max-h-[300px]"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-green-800">
                  Dr. Green Rodriguez
                </h3>
                <p className="text-sm text-green-600">Exotic Pet Specialist</p>
                <p className="mt-2 text-gray-600">
                  Dr. Rodriguez has special training in the care of birds,
                  reptiles, and small exotic mammals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
