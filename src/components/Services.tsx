"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faSyringe,
  faScissors,
  faPills,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
const Services = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-green-800">
              Comprehensive Pet Care
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of veterinary services to keep your pets
              healthy and happy.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="shadow-sm rounded-2xl border-green-100 border-1 shadow-green-100 hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <FontAwesomeIcon
                icon={faStethoscope}
                className="text-5xl text-green-600"
              />
              <h3 className="text-xl font-bold text-green-800">
                Wellness Exams
              </h3>
              <p className="text-gray-600">
                Regular check-ups to ensure your pet stays in optimal health
                with preventative care.
              </p>
            </div>
          </div>
          <div className="shadow-sm rounded-2xl border-green-100 border-1 shadow-green-100 hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <FontAwesomeIcon
                icon={faSyringe}
                className="text-5xl text-green-600"
              />
              <h3 className="text-xl font-bold text-green-800">Vaccinations</h3>
              <p className="text-gray-600">
                Protect your pet from common diseases with our vaccination
                programs.
              </p>
            </div>
          </div>
          <div className="shadow-sm rounded-2xl border-green-100 border-1 shadow-green-100 hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <FontAwesomeIcon
                icon={faScissors}
                className="text-5xl text-green-600"
              />
              <h3 className="text-xl font-bold text-green-800">Surgery</h3>
              <p className="text-gray-600">
                From routine spay/neuter to complex procedures in our
                state-of-the-art surgical suite.
              </p>
            </div>
          </div>
          <div className="shadow-sm rounded-2xl border-green-100 border-1 shadow-green-100 hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <FontAwesomeIcon
                icon={faPills}
                className="text-5xl text-green-600"
              />
              <h3 className="text-xl font-bold text-green-800">Pharmacy</h3>
              <p className="text-gray-600">
                On-site pharmacy for convenient access to medications your pet
                needs.
              </p>
            </div>
          </div>
          <div className=" shadow-sm rounded-2xl border-green-100 border-1 shadow-green-100 hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-5xl text-green-600"
              />
              <h3 className="text-xl font-bold text-green-800">
                Emergency Care
              </h3>
              <p className="text-gray-600">
                Urgent care when your pet needs it most with our responsive
                emergency services.
              </p>
            </div>
          </div>
          <div className=" shadow-sm rounded-2xl border-green-100 border-1 shadow-green-100 hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <FontAwesomeIcon
                icon={faClock}
                className="rotate-45 text-5xl text-green-600"
              />
              <h3 className="text-xl font-bold text-green-800">Dental Care</h3>
              <p className="text-gray-600">
                Complete dental services to maintain your pet&apos;s oral health
                and prevent disease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
