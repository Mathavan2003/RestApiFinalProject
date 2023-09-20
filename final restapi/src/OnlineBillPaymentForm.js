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
{/*}
   const handleDeleteBill = (index) => {
    const updatedBills = [...bills];
    updatedBills.splice(index, 1);
    setBills(updatedBills);
  };

  const handleDeleteUser = () => {
  // Check if user_id is not empty
  if (!user.user_id) {
    alert('User ID is required to delete the user.');
    return;
  }

  const shouldDelete = window.confirm('Are you sure you want to delete this user and their bills?');
  if (shouldDelete) {
    // Send a request to delete the user and their related data
    axios.delete(`http://127.0.0.1:8080/deleteUser/${user.user_id}`)
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Clear user data and bills on success
        setUser({
          user_id: '',
          first_name: '',
          last_name: '',
          email: '',
          username: '',
          password: '',
          transactionMode: '',
          age: '',
          phoneNumber: '',
          address: '',
        });
        setBills([]);
        alert('User and bills deleted successfully.'); // Provide user feedback
      })
      .catch((error) => {
        // Handle error
        console.error('Axios error:', error);
        alert('Error deleting user and bills. Please try again.'); // Provide error feedback
      });
  }
};*/}

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
  const coverStyle = {
  background: 'linear-gradient(to bottom right, #e63b66, #103ea0)',
  padding: '150px',
  borderRadius: '8px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const nameSectionStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  margin: '5px 0',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const labelStyle = {
  fontWeight: 'bold',
};

const buttonStyle = {
  background: '#103ea0',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
};
const centerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  textAlign: 'center', // Center vertically within the viewport
};
  return (
  <div style={coverStyle}>
    <div style={centerContentStyle}>
      <div className='dive'>
        <h1 style={{ textAlign: 'center' }}>Online Bill Payment</h1>
        <div>
          <h2>User Information</h2>
          <form>
            <div>
              <label style={labelStyle}>User ID:</label>
              <input
                type="text"
                name="user_id"
                value={user.user_id}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
            <div style={nameSectionStyle}>
              <label style={labelStyle}>First Name:</label>
              <input
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
            <div style={nameSectionStyle}>
              <label style={labelStyle}>Last Name:</label>
              <input
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Username:</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Password:</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
            {/* Added Mode of Transaction field */}
            <div>
              <label style={labelStyle}>Mode of Transaction:</label>
              <select
                name="transactionMode"
                value={user.transactionMode}
                onChange={handleUserInputChange}
                style={inputStyle}
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
              <label style={labelStyle}>Age:</label>
              <input
                type="text"
                name="age"
                value={user.age}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Address:</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleUserInputChange}
                style={inputStyle}
              />
            </div>
          </form>
        </div>
        <div>
          <h2>Bill Management</h2>
          <form>
            <div>
              <label style={labelStyle}>Bill Name:</label>
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
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Amount:</label>
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
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Due Date:</label>
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
                style={inputStyle}
              />
            </div>
            <div>
              <button type="button" onClick={handleAddBill} style={buttonStyle}>
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
                    {/*} <button
                      onClick={() => handleDeleteBill(index)}
                      style={{ backgroundColor: '#e63b66', color: '#fff' }}
                    >
                      Delete
                </button> */}
                  </li>
                ))}
              </ul>
             {/*} <button
              type="button"
              onClick={handleDeleteUser}
              style={{ backgroundColor: 'red', color: '#fff' }}
            >
              Delete User and Bills
              </button> */}
                </div> 
                
          )}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          style={{ ...buttonStyle, marginTop: '20px' }}
        >
          Submit Bill Payment
        </button>
      </div>
    </div>
  </div>
);

};

export default OnlineBillPaymentForm;
