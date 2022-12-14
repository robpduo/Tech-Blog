async function loginFormHandler(event) {
    event.preventDefault();
    console.log("submit login");

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // navigate to dashboard when user successfully logs in
        if (response.ok) {
            // document.location.replace('/dashboard/');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('All fields must be filled in');
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);