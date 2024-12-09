 import { useState ,useRef } from "react";
import saveAs from "file-saver";

function Qrcode()
{
const rUrl = useRef();
const [ url,setUrl] = useState("");
const [qrcode,setQrcode] = useState("");

const hUrl = (event) => { setUrl(event.target.value);}
const gqr = (event) =>{
event.preventDefault();
if(url === "")
{
alert("Please enter URL");
rUrl.current.focus();
setQrcode("");
return;
}
let res = "http://api.qrserver.com/v1/create-qr-code/?data=" + url;
setQrcode(res);
}
const dqr = (event) =>{
event.preventDefault();
saveAs(qrcode,"download");
}
return(
<>
<center>
<h1>QR CODE GENERATOR</h1>
<form onSubmit = {gqr}>
<input type = "text" placeholder = "Enter Url Link" onChange = {hUrl} ref = {rUrl}/>
<br/><br/>
<input type = "submit" value = "Generator Qr"/>
</form>
<br/>
<img src = {qrcode}/>
<form onSubmit = {dqr} >
<input type = "submit" value ="Download Qr"/>
</form>
</center>
</>
);
}
export default Qrcode;