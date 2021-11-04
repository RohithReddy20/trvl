import React from 'react';
import '../../App.css';
import Form from '../Form';
import './SignUp.css';
import $ from 'jquery';

$('.navbar').css('background','#fff');
$('.fa-times').css('color','#000');
$('.fa-bars').css('color','#000');


export default function SignUp() {
    return (
        <>
            <div className="sign-up">
                <Form />
            </div>
        </>
    );
}