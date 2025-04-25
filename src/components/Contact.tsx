const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 m-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-green-800">
              Get In Touch
            </h2>
            <p className="text-gray-600 md:text-xl">
              We&apos;re here to answer your questions and provide the best care
              for your pets.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <p className="text-gray-600">MyZoo, El Mahalla El Kubra, EG</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600">(+20) 127-983-4507</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-600">info@myzoovet.com</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                  <p className="text-gray-600">Saturday: 9am - 2pm</p>
                  <p className="text-gray-600">
                    Sunday: Closed (Emergency Services Available)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-green-100 shadow-sm rounded-2xl  border-1 shadow-green-100 hover:shadow-md transition-shadow ">
            <div className="p-8">
              <form className="space-y-8" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-semibold text-green-800"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      required
                      className="flex h-12 w-full rounded-lg border border-green-200 bg-gray-50 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                      placeholder="John"
                      aria-label="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-semibold text-green-800"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      required
                      className="flex h-12 w-full rounded-lg border border-green-200 bg-gray-50 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                      placeholder="Doe"
                      aria-label="Last Name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-green-800"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="flex h-12 w-full rounded-lg border border-green-200 bg-gray-50 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    placeholder="john.doe@example.com"
                    aria-label="Email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="pet-type"
                    className="text-sm font-semibold text-green-800"
                  >
                    Pet Type
                  </label>
                  <select
                    id="pet-type"
                    required
                    className="flex h-12 w-full rounded-lg border border-green-200 bg-gray-50 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    defaultValue=""
                    aria-label="Pet Type"
                  >
                    <option value="" disabled>
                      Select pet type
                    </option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="reptile">Reptile</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-green-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    className="flex min-h-[120px] w-full rounded-lg border border-green-200 bg-gray-50 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    placeholder="How can we help you and your pet?"
                    aria-label="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-bold shadow hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
