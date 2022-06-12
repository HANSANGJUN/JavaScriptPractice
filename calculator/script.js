const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  // operator가 + 라면 n1 + n2
  // operator가 - 라면 n1 - n2
  // operator가 * 라면 n1 * n2
  // operator가 / 라면 n1 / n2
  if (operator === '+') {
    result = Number(n1) + Number(n2)
  } else if (operator === '-') {
    result = Number(n1) - Number(n2)
  } else if (operator === '*') {
    result = Number(n1) * Number(n2)
  } else if (operator === '/') {
    result = Number(n1) / Number(n2)
  }
  return String(result);
}
buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');
      // 만약 버튼이 눌렸을 때 눌릴 버튼을 출력해라
      // 만약 firstOperend 가 0이라면 버튼 값을 출력하고
      // 아니라면 secondOperend 출력해라
      if (firstOperend.textContent === '0') {
        firstOperend.textContent = buttonContent;
      } else {
        secondOperend.textContent = buttonContent;
      }

    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      // 초기화 버튼을 누르면 화면 모든 값을 초기값으로 바꿔준다
      firstOperend.textContent = '0';
      secondOperend.textContent = '0';
      operator.textContent = '+';
      calculatedResult.textContent = '0';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      // 화면의 값이 0이거나 이전키가 연산자나 계산 버튼이라면
      // 화면의 값은 버튼 값이 입력되고
      // 숫자가 작동하면 기존 화면의 값 옆에 붙게 한다
      if (display.textContent === '0' || previousKey === 'operator' || previousKey === 'calculate') {
        display.textContent = buttonContent; // 계산기의 화면에 나타날 텍스트를 버튼의 텍스트로 변경합니다. 
      } else {
        display.textContent = display.textContent + buttonContent;
      }
      previousKey = 'number';
    }
    if (action === 'operator') {

      if (firstNum && operatorForAdvanced && previousKey !== 'operator' && previousKey !== 'calculate') {
        display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
      }
      // operator가 실행되면 화면의 값 display.textContent는 firstNum가 되고
      // 연산자 값이 입력되면
      // previousKey 값은 operator가 된다
      firstNum = display.textContent;
      operatorForAdvanced = buttonContent;
      previousKey = 'operator';
    }
    if (action === 'decimal') {
      // 화면의 값이 0이거나 숫자일 경우나 연산자가 입력될 경우
      // 화면의 값은 소수점이 입력된다
      if (display.textContent === '0' || previousKey === 'number') {
        display.textContent = display.textContent + buttonContent;
      } else if (previousKey === 'operator') {
        display.textContent = '0' + buttonContent;
      }
      previousKey = 'decimal'
    }
    if (action === 'clear') {
      // 화면에는 숫자 0이 입력되게 하고
      // 나머지 변수는 정의하지 않는다
      display.textContent = '0';
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousKey = undefined;
      previousNum = undefined;
    }
    if (action === 'calculate') {
      // Firstnum가 1이고 operator - display 2면
      // dispaly -1
      // -> -1,2 반복 
      // Firstnum가 1이고 operator - display 3면
      // dispaly -2
      // -> -2,3 반복
      // Firstnum가 1이고 operator + display 3면
      // display 4
      // 만약 firstnum가 있고 이전키가 
      // 첫번째값 연산자 화면의 값을 계산해라
      if (firstNum) {
        if (previousKey === 'calculate') {
          display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum);
        } else {
          previousNum = display.textContent;
          display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
        }
      }
      previousKey = 'calculate';
    }
  }

});
