const Home =({toggle})=>{
    return (
        <div className="flex justify-center bg-slate-500">
            <div className="page flex items-center justify-center  h-[100vh] w-[80%] md:flex-row flex-col">
                <div className="imgPart">
                    <img src="../../public/images/dices 1.png" alt="" />
                </div>
                <div className="content">
                    <h1 className="text-[80px] font-bold">DICE GAME</h1>
                    <button className="text-white bg-black py-3 px-11 text-sm font-semibold" onClick={()=> toggle(true)}>Play Now</button>                     
                </div>
            </div>
        </div>
    )
}

export default Home;