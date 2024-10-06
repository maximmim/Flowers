import { useEffect } from "react";


const Korzina = () => {
    useEffect(()=>{
        setInterval(() => {
            let d = localStorage.openmenu
            console.log(d)
        }, 1);
    },[])
    return ( 
        <div className="Korzina_full">
            <div className="plaw">
<h2 className="Koshik">Кошик</h2>
<img className="Exitsf" src="img/cross.svg"/>
</div>

        </div>
     );
}
 
export default Korzina;