import { useRef } from "react";

function Ads() {
    const ads = useRef(null)
    function handlerClose(){
        ads.current.classList.add("hidden")
    }
    return (
        <>
            <div ref={ads} className="xl:w-2/5 xl:h-28 bg-yellow-300 mx-auto flex justify-center items-center relative z-20">Chỗ này để quảng cáo
                <i class="fas fa-times text-2xl absolute top-1 right-1 bg-red-400 rounded-full px-2"
                    onClick={handlerClose}
                ></i>
            </div>
        </>
    )
}

export default Ads;