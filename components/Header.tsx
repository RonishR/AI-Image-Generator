
function Header() {
  return (
    <header>
        <div className="h-16 flex flex-col justify-center sticky items-center top-0 bg-zinc-900 border-solid  border-b border-b-zinc-700">
            <h1 className='font-head3 text-white text-4xl'>
                AI Image Generator
            </h1>
            <div className="self-end font-bold absolute bottom-0 right-2 p-1 text-white text-sm italic">
                <h2>
                    By Ronish Raja
                </h2>
                
            </div>

        </div>





    </header>
  )
}

export default Header