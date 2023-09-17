import React, { useState } from 'react';
import axios from 'axios';
const OnlineBillPaymentForm = () => {
  const [user, setUser] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    transactionMode: '',
    age: '', // New field: Age
    phoneNumber: '', // New field: Phone Number
    address: '', // New field: Address
  });

  const [bills, setBills] = useState([]);
  const [currentBill, setCurrentBill] = useState({
    billName: '',
    amount: '',
    dueDate: '',
  });

  const [transactionId, setTransactionId] = useState(0); // Initialize with 0

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleAddBill = () => {
    // Automatically assign a bill ID based on the current number of bills
    const newBill = {
      ...currentBill,
      billId: bills.length + 1,
    };
    setBills([...bills, newBill]);
    setCurrentBill({
      billName: '',
      amount: '',
      dueDate: '',
    });
  };

  const handleDeleteBill = (index) => {
    const updatedBills = [...bills];
    updatedBills.splice(index, 1);
    setBills(updatedBills);
  };

  const handleSubmit = (event) => {

    // Automatically generate a transaction ID based on a random number (you can use a more robust method)
    const generatedTransactionId = Math.floor(Math.random() * 1000000);
    setTransactionId(generatedTransactionId);
  
    // Create the JSON structure
    const jsonData = {
      user_id: user.user_id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      username: user.username,
      password: user.password,
      bill: {
        bill_id: bills.length + 1, // Automatically assign a bill ID based on the current number of bills
        user_id: user.user_id,
        biller_name: currentBill.billName,
        amount: parseFloat(currentBill.amount), // Convert amount to a float
        duedate: currentBill.dueDate,
        status: 'Pending', // Assuming you want to set a default status
      },
      ph: [
        {
          payment_history_id: generatedTransactionId, // Use the generatedTransactionId as payment_history_id
          user_id: user.user_id,
          bill_id: bills.length + 1, // Use the same bill ID as in the bill section
          transaction_amount: parseFloat(currentBill.amount), // Convert amount to a float
          transaction_status: 'Completed', // Assuming you want to set a default status
        },
      ],
    };
  
    // You can do something with the JSON data here, e.g., send it to a server
    axios.post('http://127.0.0.1:8080/addUser', jsonData, {
        headers: {
          'Content-Type': 'application/json', 
        },
      })
      .then((response) => {
        
      })
      .catch((error) => {
        console.error('Axios error:', error);
      });
    // For demonstration purposes, let's log the JSON data
    console.log(jsonData);
  };
  

  return (
    <div className='dive'>
      <h1>Online Bill Payment</h1>
      <div>
        <h2>User Information</h2>
        <form>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              name="user_id"
              value={user.user_id}
              onChange={handleUserInputChange}
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleUserInputChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleUserInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserInputChange}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserInputChange}
            />
          </div>
          {/* Added Mode of Transaction field */}
          <div>
            <label>Mode of Transaction:</label>
            <select
              name="transactionMode"
              value={user.transactionMode}
              onChange={handleUserInputChange}
            >
              <option value="">Select Transaction Mode</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Net Banking">Net Banking</option>
              <option value="UPI">UPI</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* New Fields */}
          <div>
            <label>Age:</label>
            <input
              type="text"
              name="age"
              value={user.age}
              onChange={handleUserInputChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleUserInputChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleUserInputChange}
            />
          </div>
        </form>
      </div>
      <div>
        <h2>Bill Management</h2>
        <form>
          <div>
            <label>Bill Name:</label>
            <input
              type="text"
              name="billName"
              value={currentBill.billName}
              onChange={(e) =>
                setCurrentBill({
                  ...currentBill,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={currentBill.amount}
              onChange={(e) =>
                setCurrentBill({
                  ...currentBill,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Due Date:</label>
            <input
              type="date"
              name="dueDate"
              value={currentBill.dueDate}
              onChange={(e) =>
                setCurrentBill({
                  ...currentBill,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div>
            <button type="button" onClick={handleAddBill}>
              Add Bill
            </button>
          </div>
        </form>
        {bills.length > 0 && (
          <div>
            <h2>Bills</h2>
            <ul>
              {bills.map((bill, index) => (
                <li key={index}>
                  <strong>Bill ID:</strong> {bill.billId} |{' '}
                  <strong>Bill Name:</strong> {bill.billName} |{' '}
                  <strong>Amount:</strong> ${bill.amount} |{' '}
                  <strong>Due Date:</strong> {bill.dueDate} |{' '}
                  <button onClick={() => handleDeleteBill(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit Bill Payment
      </button>
    </div>
  );
};

export default OnlineBillPaymentForm;
