import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'bootstrap/js/dist/toast';
import React, { useEffect, useState } from 'react';
import IconUser from './user_icon';
import FLwoda_dw from './FLowers';
import IconBasket from './kawdk';
import UserModal from './UserModal';
import Shop_dw from './hop';



const OP = () => {

const [o_korzina,seto_korzina] = useState(false)
const [o_menu,seto_menu]= useState(false)





const errors = () =>{
  localStorage.notification = JSON.stringify({
    g_text:"На даний момент функція у розробці",
    header:"AI FLOWERS",
    color:"red"
})


const toastLiveExample = document.getElementById('liveToast');
const toastBootstrap = new Toast(toastLiveExample);
toastBootstrap.show();
}

const open_korzina = ()=>{
  const menu_usr = document.getElementsByClassName("UOw")[0];
  const img = document.getElementsByClassName("Korzina_full")[0];
  
  

  
  if (o_korzina) {
  
    img.style = 'display:none'
    menu_usr.style =  'display:none'
    
    
  document.getElementById("body").style= "overflow: none"
  seto_korzina(!o_korzina)
  }
  else {
  
  img.style = 'display:block'
  menu_usr.style = 'display:block'
  document.getElementById("body").style= "overflow: hidden"
    seto_korzina(!o_korzina)
  }
}


const open_menu = ()=>{
const menu_usr = document.getElementsByClassName("Urs_mdl")[0];
const img = document.getElementsByClassName("image-container")[0];

const faw = document.getElementsByClassName("dwa")[0];

if (o_menu) {


img.style = 'opacity:1'
menu_usr.style = 'opacity:0'

  faw.style = "opacity:1"
img.style.setProperty('--dw', 'rgba(0, 0, 0, 0.5)');
seto_menu(!o_menu)
}
else {

  faw.style = "opacity:0"
  img.style.setProperty('--dw', 'none');
menu_usr.style = 'opacity:1'
seto_menu(!o_menu)
}


}

    return (
        <nav style={{borderRadius:"10px",marginBottom:'10px'}} className="navbar navbar-expand-lg bg-body-tertiary daw">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Flovers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Store</a>
  </li>
 
  <li className="nav-item">
    <a className="nav-link"  href="#">Link</a>
  </li>
   <li className="nav-item">
   <div onClick={errors} ><a className="nav-link disabled" href="#">Our AI Flowers </a></div> 
  </li>
</ul>
<IconUser className={'icon_usr'} onClick={open_menu}/>
<IconBasket className={'fw'} onClick={open_korzina}/>
     </div>
            </div>
        </nav>
    );
}

export default OP;