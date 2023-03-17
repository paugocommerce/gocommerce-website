import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import JotformEmbed from 'react-jotform-embed';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="contact-form-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2 className='contact-form-title'>Be part of our growing team!</h2>
                    
                    <p className='contact-form-desc'>We are looking for people who have the passion for the business world and wants to be part of a great team. If you want to be part of an exciting environment with a lot of growth opportunities, there is no better place than GoCommerce. Be part of our family today!</p>

                    <h2 className='contact-form-label'>US HELP CENTER / SUBMIT A REQUEST </h2>
                </div>

                <div className="row align-items-center contact-form-field">
                   

                    <div className="col-lg-6 col-md-12">
                    <JotformEmbed src="https://form.jotformeu.com/230739176970061" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;  