// import React, { useRef } from 'react';
import './From.css';
import { useState } from 'react';


function From() {

    // const data = useRef();
    // const click = () => {
    //     console.log(data.current.value, "initial value")
    //     localStorage.setItem("initial value", data.current.value)
    // }
    // console.log(localStorage.getItem("initial value"), "*");

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [code, setCode] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hobby, setHobby] = useState([]);
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [is_edit, setIs_edit] = useState(false);
    const [update_id, setUpdate_id] = useState("");

    const set_fname = (e) => {
        setFname(e.target.value);
    }
    const set_lname = (e) => {
        setLname(e.target.value);
    }
    const set_code = (e) => {
        setCode(e.target.value);
    }
    const set_number = (e) => {
        setNumber(e.target.value);
    }
    const set_email = (e) => {
        setEmail(e.target.value);
    }
    const set_password = (e) => {
        setPassword(e.target.value);
    }
    const set_hobby = (e) => {
        if (e.target.checked === true) {
            setHobby(ch => [...ch, e.target.value]);
        } else {
            setHobby(hobby.filter(pp => pp !== e.target.value));
        }
    }
    const set_gender = (e) => {
        setGender(e.target.value);
    }
    const set_country = (e) => {
        setCountry(e.target.value);
    }

    let userlist = JSON.parse(localStorage.getItem("list")) || [];

    const [allData, setallData] = useState(userlist);

    const click = (event) => {

        // event.preventdefault();

        const data = { fname, lname, email, code, number, password, hobby, gender, country };
        if (userlist == null) {
            userlist = JSON.parse(localStorage.getItem("list"));
            localStorage.setItem("list", JSON.stringify([data]));
            setallData([data])
        } else {
            userlist.push(data);
            localStorage.setItem("list", JSON.stringify(userlist));
            setallData(userlist)
        }

        setFname("");
        setLname("");
        setCode("");
        setNumber("");
        setEmail("");
        setPassword("");
        setHobby("");
        setGender("");
        setCountry("")

        // var name = document.getElementById("fname").value;
        // if (name === "") {
        //     document.getElementById("message").innerHTML = "This feild is requied";
        // } else {
        //     document.getElementById("message").innerHTML = "";
        // }

    };
    // console.log(userlist);
    // const handlesubmit = () => {
    //     set_fname.preventdefault();
    //     if (fname.length === 0 || lname.length === 0) {
    //         setError(true)
    //     }
    //     console.log(fname, lname);
    // }

    const delete_data = (e) => {
        console.log(e);
        const delete_data_one = userlist.filter((ele, index) => index !== e)
        localStorage.setItem("list", JSON.stringify(delete_data_one));
        setallData(delete_data_one)
    }

    const edit_data = (e) => {
        console.log(e);
        let getData = userlist[e];
        setFname(getData.fname);
        setLname(getData.lname);
        setCode(getData.code);
        setNumber(getData.number);
        setEmail(getData.email);
        setPassword(getData.password);
        setHobby(getData.hobby);
        setCountry(getData.country);
        setIs_edit(true);
        setUpdate_id(e);
    }

    const UpdateData = (event) => {


        userlist[update_id].fname = fname;
        userlist[update_id].lname = lname;
        userlist[update_id].code = code;
        userlist[update_id].number = number;
        userlist[update_id].email = email;
        userlist[update_id].password = password;
        userlist[update_id].hobby = hobby;
        userlist[update_id].country = country;

        localStorage.setItem("list", JSON.stringify(userlist));
        setallData(userlist)
        setIs_edit(false);

    }

    return (
        <>
            {/* <input ref={ data } />
            (error ?<label>this feild is required</label>! "")
            <button onClick={ click }>add</button> */}

            {/* <button className='click'>Form</button> */ }
            <div className="box">
                <div className="form" >
                    <h1>Place your order here</h1><br /><br />

                    <label><b>Full Name</b></label>
                    <input className='inp1' onChange={ set_fname } value={ fname } type="text" placeholder='First Name' />
                    <input className='inp2' onChange={ set_lname } value={ lname } type="text" placeholder='Last Name' /> <br /><br />
                    {/* { error && set_fname.length <= 0 ?
                        <label>hello</label> : "" } */}
                    {/* <p id='message' className='message'></p><br /> */ }

                    <label><b>Phone Number</b></label>
                    <input className='inp3' onChange={ set_code } value={ code } type="number" placeholder='Area code' /> -
                    <input className='inp4' onChange={ set_number } value={ number } type="number" placeholder='Phone number' /><br /><br />


                    <label><b>E-mail</b></label>
                    <input className='inp5' onChange={ set_email } value={ email } type="text" placeholder='Ex: myname@eyz.com' /><br /><br />


                    <label><b>password</b></label>
                    <input className='inp6' onChange={ set_password } value={ password } type="password" placeholder='password' /> <br /><br />


                    <label><b>hobby</b></label>
                    <input className='inp7' onChange={ set_hobby } value="cricket" type="checkbox" />cricket
                    <input className='inp8' onChange={ set_hobby } value="music" type="checkbox" />music
                    <input className='inp9' onChange={ set_hobby } value="reading" type="checkbox" />reading <br /><br />


                    <label><b>gender</b></label>
                    <input className='inp10' onChange={ set_gender } name='gender' value="male" type="radio" />male
                    <input className='inp11' onChange={ set_gender } name='gender' value="female" type="radio" />female <br /> <br />


                    <label><b>countey</b></label>
                    <select className='inp12' onChange={ set_country } value={ country } >
                        <option value="">select country</option>
                        <option value="pakistan" >Pakistan</option>
                        <option value="india" >India</option>
                        <option value="canada" >Canada</option>
                        <option value="usa" >Usa</option>
                        <option value="newzeland" >New zeland</option>
                    </select><br /><br /><br />
                    <hr /><br />

                    { is_edit ? <button className='button1' onClick={ UpdateData } >update</button> :
                        <button className='button1' onClick={ click } >Submit</button>
                    }

                    <button className='button2'  >Back</button>
                </div>
            </div><br />
            <center>

                <div>
                    <table border={ 3 } cellPadding="0" width="150px" >

                        <thead  >
                            <tr >
                                <th>no</th>
                                <th>fname</th>
                                <th>lname</th>
                                <th>number</th>
                                <th>email</th>
                                <th>password</th>
                                <th>hobby</th>
                                <th>gender</th>
                                <th>country</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody className='thead'>
                            {
                                allData.map((ele, index) => {
                                    return (
                                        <tr key={ index }>
                                            <td>{ index + 1 }</td>
                                            <td>{ ele.fname }</td>
                                            <td>{ ele.lname }</td>
                                            <td>{ ele.number }</td>
                                            <td>{ ele.email }</td>
                                            <td>{ ele.password }</td>
                                            <td>{ ele.hobby }</td>
                                            <td>{ ele.gender }</td>
                                            <td>{ ele.country }</td>
                                            <td><button className='btn1' onClick={ () => edit_data(index) }>Edit</button></td>
                                            <td><button className='btn2' onClick={ () => delete_data(index) }>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </center>
        </>
    )
}

export default From