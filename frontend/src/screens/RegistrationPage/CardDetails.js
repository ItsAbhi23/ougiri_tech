import React from 'react'
import { useState } from 'react';
import TransactionPage from '../RegistrationPage/TransactionPage';
export default function CardDetails() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
  }
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // your form submission logic here
      const paymentType = 0// get payment type from form
      const cardNumber = 0// get card number from form
      const upiId = 0// get UPI ID from form
      setPaymentInfo({ paymentType, cardNumber, upiId });
      setIsSubmitted(true);
    };
  
    return (
      <div>
        {!isSubmitted ? (
             <form onSubmit={handleFormSubmit}>
             <div style={{ display: 'flex', flexDirection: 'column' }}>
               <label>
                 First Name:
                 <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
               </label>
               <label>
                 Last Name:
                 <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
               </label>
               <label>
                 Email:
                 <input type="email" required  value={email} onChange={(e) => setEmail(e.target.value)} />
               </label>
             </div>
             <button type="submit">Submit</button>
           </form>
        ) : (
          <TransactionPage
            paymentType={paymentInfo.paymentType}
            cardNumber={paymentInfo.cardNumber}
            upiId={paymentInfo.upiId}
          />
        )}
      </div>
    );
}


