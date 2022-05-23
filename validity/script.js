// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let Username = document.querySelector('#username') //아이디

let success = document.querySelector('.success-message') //성공메세지

let failure = document.querySelector('.failure-message') // 실패메세지

let pwd1 = document.querySelector('#password') // 비밀번호

let pwd2 = document.querySelector('#password-retype') // 비밀번호 확인

let pwdfair = document.querySelector('.mismatch-message') // 비밀번호 값이 틀린 메세지

let s


// pwd2.onkeyup = function () {
//   if(isMatch(pwd1.value , pwd2.value)) {
//     pwdfair.classList.add('hide');
//   } else {
//     pwdfair.classList.remove('hide')
//   }
// }

pwd1.onkeyup = function () {
  if(strongPassword(pwd1.value)) {

  }
}


pwd2.onkeyup = function () {
  if(isMatch(pwd1.value , pwd2.value)) {
     pwdfair.classList.add('hide');
     return true;
  } else {
    pwdfair.classList.remove('hide')
     return false;
  }
}




Username.onkeyup = function () {

  //if(isMoreThan4Length(Username.value)) {
    if(onlyNumberAndEnglish(Username.value)) {
    //성공메세지 가림
     success.classList.remove('hide')

    //실패 메세지 가려야함
     failure.classList.add('hide')

  } else {
    //성공메세지 추가
     success.classList.add('hide')

    //실패 메세지 추가
    failure.classList.remove('hide')
    
  }
}



function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.

  
  return value.length >= 4


}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.


  
   return password1 === password2;

}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}