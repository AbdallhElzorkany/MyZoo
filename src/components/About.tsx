import Image from "next/image";
const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container m-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/vet.jpg"
              alt="MyZoo Veterinary Clinic"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4 not-lg:text-center">
            <div className="inline-block rounded-lg  bg-green-100 px-3 py-1 text-sm text-green-800">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-green-800">
              Our Story
            </h2>
            <p className="text-gray-600 md:text-xl">
              At MyZoo Veterinary Clinic, we believe every animal deserves
              exceptional care. Our team of experienced veterinarians and
              support staff provide personalized treatment for pets of all
              kinds—whether they bark, purr, chirp, or hiss. We combine advanced
              medical technology with a warm, welcoming environment to keep your
              pet healthy and happy.
            </p>
            <p className="text-gray-600 md:text-xl">
              Our state-of-the-art facility is equipped with the latest
              technology to provide the best possible care for your beloved
              companions. We believe in treating each pet as if they were our
              own, with kindness, respect, and the highest standard of medical
              care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
