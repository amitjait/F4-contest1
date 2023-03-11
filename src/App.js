
import "./style.css"
import { useState } from "react";

function App(){

    let [email, setEmail] = useState({email:"", isEmail:false});
    let [pass, setPass] = useState({pass:"", isPass:false});
    let [cPass, setCPass] = useState({cPass:"", isCPass:false});

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
            return (true)
        }
        return (false)
    }

    function handleEmail(event){
        console.log("Clicked");
        let mes = document.getElementById('emailMessage');
        let input = document.getElementById(event.target.id);
        let email = event.target.value;
        if(!ValidateEmail(email)){
            mes.innerHTML = "Enter a valid email!";
            mes.style.color = "red";
            mes.style.display ="block"

            input.style.border = "2px solid red";

            setEmail({email:email, isEmail:false})
        }else{
            mes.innerHTML = "";
            mes.style.display = "none"

            input.style.border = "2px solid lightgreen";
            setEmail({email:email, isEmail:true})
        }
    }

    function checkPass(pass){
        for(let i=0; i<pass.length; i++){
            if(pass.charAt(i) == " "){
                return false;
            }
        }

        return true;        
    }
 

    function handlePass(event){
        let password = document.getElementById(event.target.id);
        let mes = document.getElementById('passMessage')
        
        let pass = event.target.value;
        if(checkPass(pass) && pass.length >= 8){
            password.style.border = "2px solid lightgreen";
            mes.innerHTML = "";

            setPass({pass:pass, isPass:true});
            
        }else{
            password.style.border = "2px solid red";
            mes.innerHTML = "Password should have at least 8 characters"

            setPass({pass:pass, isPass:false});
        }
    }

    function hasnleCPass(event){
        let cpass =  document.getElementById(event.target.id);
        let mes = document.getElementById('cPass');

        if(pass.pass == event.target.value){
            mes.innerHTML = "";

            cpass.style.border = "2px solid lightgreen"

            setCPass({cPass:event.target.value, isCPass:true})
        }else{
            mes.innerHTML = "Confirm Password is not same ";

            cpass.style.border = "2px solid red"
            setCPass({cPass:event.target.value, isCPass:false})
        }
    }

    function submit(){
        if(email.isEmail && pass.isPass && cPass.isCPass){
            alert("Form is submitted succesfully!");
        }else{

            console.log(email.isEmail, pass.isPass, cPass.isCPass)
            alert("Form can not be submitted!");
        }
    }

    return (
        <div className = "form">
            <label for="email">Email:</label>
            <input type="email" id="email" onChange={handleEmail}/>
            <p id="emailMessage">Enter a valid email!</p>

            <label for="email">Password:</label>
            <input type="password" id="password" onChange={handlePass}/>
            <p id="passMessage">Password should have at least 8 characters</p>

            <label for="email">Confirm password:</label>
            <input type="password" id="cPassword" onChange={hasnleCPass}/>
            <p id="cPass">Password is not same!</p>
            
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default App;
