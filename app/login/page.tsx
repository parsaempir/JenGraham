import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Login() {
  return (
    <main className="relative min-h-screen bg-[#1E3147] flex flex-col font-sans overflow-hidden">
      <Navbar />
      {/* Background Pattern */}
      <div className="absolute right-[35%] bottom-[-50px] pointer-events-none select-none z-0">
        <Image
          src="/Training Carousel - in person.svg"
          alt="Background Pattern"
          width={1800}
          height={1200}
          className="w-full h-auto opacity-100"
          priority
        />
      </div>


      <div className="flex-1 flex flex-col lg:flex-row items-start justify-between w-full lg:min-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 pt-28 md:pt-32 lg:pt-50 pb-12 lg:pb-0">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-4 lg:mb-0 lg:pr-12 relative min-h-[auto] lg:min-h-[450px]">
          <div className="relative z-10">
            <h1 className="text-[32px] md:text-4xl lg:whitespace-nowrap lg:text-[4rem] font-serif text-white leading-[1.2] lg:leading-[1.1] mb-6 -ml-0.5 tracking-tight">
              Make Power Moves.<br className="hidden lg:block" />
              <span className="italic font-light">Without burning out.</span>
            </h1>

            <p className="text-[#94A3B8] text-sm md:text-base mb-10 leading-relaxed max-w-lg lg:max-w-none">
              This is where high-performing women come to regain control of <br className="hidden lg:block" /> their time, energy, and decisions.<br className="hidden lg:block" /> Structure over chaos. Boundaries over burnout. <br className="hidden lg:block" />You don't need more motivation. You need a system.
            </p>
          </div>

          <div className="hidden lg:block absolute bottom-[-350px] right-[40%] w-full max-w-[500px] aspect-[4/5] lg:aspect-[3/4] z-0">
            <Image
              src="/Photoroom .webp"
              alt="Jen Graham"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Right Section - Sign In Card */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative z-20">
          <div className="bg-white rounded-[1.5rem] p-7 md:p-8 lg:p-10 w-full max-w-[500px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="mb-6">
              <span className="text-[#4C5133] font-medium text-xs mb-1 block">Sign in</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight leading-tight">Welcome Back</h2>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">Email</label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full px-5 py-4 rounded-xl border border-gray-100 text-black placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-200 transition-all bg-white shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-5 py-4 rounded-xl border border-gray-100 text-black placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-200 transition-all bg-white shadow-sm"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button className="bg-[#4C5133] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#3D4D33] transition-all text-sm">
                  Sign in
                </button>
              </div>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-400 font-normal">or</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="w-16 h-16 flex items-center justify-center border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all shadow-sm">
                <Image src="/Facebook-site.svg" alt="Facebook" width={24} height={24} />
              </button>
              <button className="w-16 h-16 flex items-center justify-center border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all shadow-sm">
                <Image src="/Google-site.svg" alt="Google" width={24} height={24} />
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-xs">
                New user? <span className="text-[#4C5133] font-bold cursor-pointer hover:underline">Create an account</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
