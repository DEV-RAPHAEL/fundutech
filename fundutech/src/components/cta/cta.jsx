import React from 'react'

const Cta = () => {
  return (
    <div>
        
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Love what we do?</span>
            <span className="block text-[#5FA0E0]">Donate to us We appreciate just anything.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://dashboard.flutterwave.com/donate/numaldkx1hij"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5FA0E0] hover:bg-indigo-700"
              >
                Donate
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#5FA0E0] bg-white hover:bg-indigo-50"
              >
                Thank You
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta

