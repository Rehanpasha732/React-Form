import React, { useState } from "react";

import "./home.css"
import img from "../component/images/img.webp"

function Home() {

    const [company, setCompany] = useState('')
    const [client, setClient] = useState('')
    const [name, setName] = useState('')
    const [gov, setGov] = useState('')


    const [Fclr, setFClr] = useState("")
    const [cclr, setcClr] = useState("")
    const [nclr, setnClr] = useState("")
    const [gclr, setgClr] = useState("")



    function sub() {
        if (company === "") {
            // alert("enter your first name");
            setFClr("red")

        }
        else if (client === "") {
            setcClr("red")
        }

        else if (name === "") {
            setnClr("red")
        }
        else if (gov === "") {
            setgClr("red")
        }


        else {
            let data = {
                name: company,
                mail: client,
                password: gov,
                user: name,
            }
            console.log(data);
            setCompany("");
            setClient("");
            setGov("");
            setName("")

            alert(company + " login sucessfully")
        }
    }
    return (
        <>
            <div className="main_div">
                <div className="upper_div">
                    <img src={img} className="img" />
                </div>
                <div className="data">
                    <h1 className="main_h">ArestecSBD8(a) III Registration From</h1>

                    <p className="conatact"> Contact me:<a href="#">pasharehan732@gmail.com</a></p>
                    <p className="para">Arestec Aprovel of pricing.stafing and participating in white Glove Review will always be required</p>
                    <div className="form">
                        <h4 className="company">Company Email * </h4>
                        <input type="text" placeholder="name" value={company} onChange={(ev) => { setCompany(ev.target.value) }} style={{ background: Fclr }}  />

                        <h4 className="client">Client Agency * </h4>
                        <input type="text" value={client} onChange={(ev) => { setClient(ev.target.value) }} style={{ background: cclr }} />

                        <h4 className="name">Name * </h4>
                        <input type="text" value={name} onChange={(ev) => { setName(ev.target.value) }} style={{ background: nclr }} />

                        <h4 className="govwin">GovWin ID* </h4>
                        <input type="password" value={gov} onChange={(ev) => { setGov(ev.target.value) }} style={{ background: gclr }} />

                        <div className="btn">
                            <button class="glow-on-hover" onClick={sub} type="button">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default Home