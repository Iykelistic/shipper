const loginFormBtn = document.getElementById('login-form-button');
const signupFormBtn = document.getElementById('signup-form-button');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const html = document.getElementsByTagName('html')[0];

loginFormBtn.addEventListener('click', () => {
    signupForm.classList.add('hidden-form');
    loginForm.classList.remove('hidden-form');
    loginFormBtn.classList.add('active');
    signupFormBtn.classList.remove('active');
    html.classList.remove('register-mode');
    html.classList.add('login-mode');
});

signupFormBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden-form');
    signupForm.classList.remove('hidden-form');
    signupFormBtn.classList.add('active');
    loginFormBtn.classList.remove('active');
    html.classList.remove('login-mode');
    html.classList.add('register-mode');
});