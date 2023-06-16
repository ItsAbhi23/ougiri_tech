import React from 'react';

function TransactionPage(props) {
  const { paymentType, cardNumber, upiId } = props;

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <p>Your {paymentType} payment has been successfully processed.</p>
      {paymentType === 'card' && <p>Card Number: {cardNumber}</p>}
      {paymentType === 'upi' && <p>UPI ID: {upiId}</p>}
    </div>
  );
}

export default TransactionPage;
