
<!DOCTYPE html>
<html>
<head>
  <title>Приложение</title>
</head>
<body>
  <input type="text" id="numberInput1" placeholder="Введите число от 100 до 300">
  <input type="text" id="numberInput2" placeholder="Введите число от 100 до 300">
  <button id="submitBtn">Submit</button>
  <div id="result"></div>

  <script>
    const submitBtn = document.getElementById('submitBtn');
    const numberInput1 = document.getElementById('numberInput1');
    const numberInput2 = document.getElementById('numberInput2');
    const resultDiv = document.getElementById('result');

    submitBtn.addEventListener('click', () => {
      const number1 = parseInt(numberInput1.value);
      const number2 = parseInt(numberInput2.value);

      if (isNaN(number1) || isNaN(number2) || number1 < 100 || number1 > 300 || number2 < 100 || number2 > 300) {
        resultDiv.textContent = 'Одно из чисел вне диапазона от 100 до 300';
      } else {
        const url = https://picsum.photos/${number1}/${number2};

        fetch(url).then(response => {
          if (response.ok) {
            const img = document.createElement('img');
            img.src = url;
            resultDiv.innerHTML = '';
            resultDiv.appendChild(img);
          } else {
            console.error('Ошибка запроса');
          }
        });
      }
    });
  </script>
</body>
</html>

