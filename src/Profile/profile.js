// import React, { useState } from "react";
// import { Dialog } from "primereact/Dialog";
// import {InputText} from "primereact/InputText";


// const Profile =() => {
//    const [image, setimage] = useState("")
//    const [displayBasic, setDisplayBasic] = useState(false);
// const onChange=()=>{
//    const file = event.target.files[0];
//           if(file && fil.type.substring(0,5)---"image")(
//             setimage(file);
//           )else(
//             setimage(null)
//           )
// }
//    return(
//    <div className="profile.png text-creator p-4">
//     <div className="flex flex-column justify-content-center align-item-center"></div>

//    <img
//     style={{
//       width="200px",
//       height="200px",
//       borderRadius="50%",
//       objectFit="cover",
//       border="4px solide green",
//     }}
//     src= {profile} alt=""/>
//     <label htmlFor="" className="mt-3 font-semibold text-5x1">Wanadamu</label>
//     <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }}>
//          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//          cupidatt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//        </Dialog>
//     <InputText
//      type="file"
//      accept='/image/"'

//      onChange={(event)=>{
         
//      }}
     
//      />
//    </div>
//    )
// }
// export default Profile;