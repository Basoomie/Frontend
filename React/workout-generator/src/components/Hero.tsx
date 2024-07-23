

export default function Hero() {
  return (
    <div className="h-screen text-center flex flex-col justify-center items-center w-4/5 mx-auto gap-4 p-4">
        <div className="p-6">
            <p className="uppercase">IT'S TIME TO GET</p>
            <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl">SWOLE<span className="text-blue-400">NORMOUS</span></h1>
        </div>
        <p className="">I hereby acknowledgement that I may become <span className="text-blue-400">unbelievably swolenormous</span> and accept all risks of becoming the local <span className="text-blue-400">mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
        <button className="border-blue-400 border-solid border-2 rounded-md px-9 py-4 mt-6">Accept & Begin</button>
    </div>
  )
}
