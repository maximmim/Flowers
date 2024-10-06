import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const Loading = () => {

    useEffect(()=>{
        let i = 0
        const y =setInterval(()=>{
            i++
            
            document.getElementById("aw").style.width = i+"%"
            if (i>=100) {
                clearInterval(y)
            }
        },1)
    },[])
    return ( 
        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div id='aw' className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '0%' }}></div>
    </div>
     );
}
 
export default Loading;