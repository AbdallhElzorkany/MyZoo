import Image from 'next/image'
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
    >
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-green-800">
              What Pet Parents Say
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don&apos;t just take our word for it - hear from our satisfied
              clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-2">
          <div className="border-green-100 shadow-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full overflow-hidden h-12 w-12 flex-shrink-0">
                  <Image
                    src="/3.jpeg"
                    alt="Client"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-600 italic">
                    <q>
                      The team at MyZoo has been caring for our dog Max for
                      years. They are always thorough, kind, and take the time
                      to answer all our questions. We wouldn&apos;t trust anyone
                      else with our furry family member!
                    </q>
                  </p>
                  <p className="mt-4 font-medium text-green-800">Jennifer K.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-green-100 shadow-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full overflow-hidden h-12 w-12 flex-shrink-0">
                  <Image
                    src="/4.png"
                    alt="Client"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-600 italic">
                    <q>
                      When our cat needed emergency surgery, the MyZoo team was
                      incredible. They explained everything clearly, performed
                      the procedure with expertise, and followed up to ensure a
                      smooth recovery. We are forever grateful.
                    </q>
                  </p>
                  <p className="mt-4 font-medium text-green-800">Robert T.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-green-100 shadow-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full overflow-hidden h-12 w-12 flex-shrink-0">
                  <Image
                    src="/2.jpeg"
                    alt="Client"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-600 italic">
                    <q>
                      As the owner of a bearded dragon, finding a vet with
                      exotic pet experience was challenging until we found
                      MyZoo. Dr. Rodriguez is knowledgeable, patient, and
                      genuinely cares about our scaly friend.
                    </q>
                  </p>
                  <p className="mt-4 font-medium text-green-800">Samantha L.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-green-100 shadow-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full overflow-hidden h-12 w-12 flex-shrink-0">
                  <Image
                    src="/1.jpg"
                    alt="Client"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-600 italic">
                    <q>
                      The preventative care program at MyZoo has kept our senior
                      dog healthy well into his golden years. Their attention to
                      detail and genuine compassion makes every visit a positive
                      experience.
                    </q>
                  </p>
                  <p className="mt-4 font-medium text-green-800">David M.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
