// User credentials (for demonstration purposes)
const userCredentials = [
  { email: "andrescanialaloha@gmail.com", password: "123456", balance: 1000 }
];

// Store current user info
let currentUser = null;

// Switch to Register Form
function showRegisterForm() {
  document.getElementById('registerContainer').style.display = 'block';
  document.getElementById('loginContainer').style.display = 'none';
}

// Switch to Login Form
function showLoginForm() {
  document.getElementById('registerContainer').style.display = 'none';
  document.getElementById('loginContainer').style.display = 'block';
}

// Login User
function loginUser() {
  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;

  currentUser = userCredentials.find(user => user.email === emailInput && user.password === passwordInput);
  
  if (currentUser) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('userEmail').textContent = currentUser.email;
  } else {
    alert('Invalid email or password!');
  }
}

// Register User
function registerUser() {
  const newEmail = document.getElementById('newEmail').value;
  const newPassword = document.getElementById('newPassword').value;
  
  userCredentials.push({ email: newEmail, password: newPassword, balance: 1000 });
  alert('Account created successfully!');
  showLoginForm();
}

// Logout User
function logoutUser() {
  currentUser = null;
  document.getElementById('loginContainer').style.display = 'block';
  document.getElementById('gameSection').style.display = 'none';
}

// Start Game (Add your game logic here)
function startGame() {
  alert('Game Started! You can bet now!');
  // Here, you will add more games (Dice Roll, Coin Flip, etc.)
}

// Deposit and Withdraw Logic
function depositMoney() {
  const depositAmount = prompt("Enter deposit amount:");
  currentUser.balance += parseFloat(depositAmount);
  alert(`Successfully deposited! New balance: $${currentUser.balance}`);
}

function withdrawMoney() {
  const withdrawAmount = prompt("Enter withdrawal amount:");
  if (withdrawAmount <= currentUser.balance) {
    currentUser.balance -= parseFloat(withdrawAmount);
    alert(`Successfully withdrawn! New balance: $${currentUser.balance}`);
  } else {
    alert('Insufficient balance!');
  }
}

// Event Listeners
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  loginUser();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  registerUser();
});

document.getElementById('startGameBtn').addEventListener('click', startGame);
document.getElementById('logoutBtn').addEventListener('click', logoutUser);
document.getElementById('depositBtn').addEventListener('click', depositMoney);
document.getElementById('withdrawBtn').addEventListener('click', withdrawMoney);
