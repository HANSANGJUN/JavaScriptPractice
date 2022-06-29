const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button")
const loginForm = document.querySelector('#login-form')
const gree = document.querySelector("#gree")
const link = document.querySelector("a")

const HIDDEN_CLASSNAME = "hidden"
const USERNAMEKEY = "username"


function onLoginSubmit(el) {
  el.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  localStorage.setItem(USERNAMEKEY , username)
  paintGreetings()
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAMEKEY)
  gree.innerText = `HI ${username}`
  gree.classList.remove(HIDDEN_CLASSNAME)

}

// loginForm.addEventListener("submit" , onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAMEKEY)


if(savedUsername === null) {
  // form 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit" , onLoginSubmit)

} else {
  // gree 보여주기

  paintGreetings()

  }
