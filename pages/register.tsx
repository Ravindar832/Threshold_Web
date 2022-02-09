
import styles from '../styles/regi.module.scss'
import PhoneInput from 'react-phone-input-2'
import React, { useState } from "react";
import 'react-phone-input-2/lib/style.css'

export default function register() {
    return (
         <div className={styles.register}>
            <h1><b> STUDENT REGISTRATION FORM</b></h1>
            
            <div className={styles.a}>
                <div>
                <input type= 'text' placeholder='username' ></input></div><br />
                <div>
                <input type="password" placeholder='password' ></input></div><br />
                <div>
                <input type= "password" placeholder='confirm password'></input></div><br />
                <div>
                <PhoneInput 
          country={'us'}
          value={'phone'}
          onChange={phone => 'set state'}
        />
        {/* <input type= "tel" placeholder='phone number' /> */}
           </div><br /><br />
           <a href="/per_inform"><h3>signup</h3></a>
            </div>
            <a href="/login">back</a>
         </div>
    )
}