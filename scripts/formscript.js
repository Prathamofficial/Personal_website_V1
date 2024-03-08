function validateForm() {
  var userId = document.getElementById('userId').value;
  var password = document.getElementById('password').value;

  // Check if userID and password are correct
  if (userId === '123' && password === '123') {
    // Redirect to another page
    window.location.href = 'personaldocuments.html';
    return false;
  } else {

    document.getElementById('userId').classList.add('error');
    document.getElementById('password').classList.add('error');
    document.getElementById('userId').value = '';
    document.getElementById('password').value = '';
    return false;
  }
}

// window.location.href = 'file:///C:/path/to/your/html/personaldocuments.html';
// C:\Users\jadha\Desktop\personal website\html\personaldocuments.html