import styles from './styles';

const handleOnPress = (
  toShow: string,
  isOperation: boolean,
  firstNumber: string,
  setFirstNumber: React.Dispatch<React.SetStateAction<string>>,
  secondNumber: string,
  setSecondNumber: React.Dispatch<React.SetStateAction<string>>,
  operation: string,
  setOperation: React.Dispatch<React.SetStateAction<string>>,
  setResult: React.Dispatch<React.SetStateAction<number>>,
) => {
  switch (toShow) {
    case '=':
      if (operation && !secondNumber) {
        break;
      }
      if (firstNumber && !operation && !secondNumber) {
        setResult(parseFloat(firstNumber));
        break;
      }
      getResult(
        operation,
        setResult,
        firstNumber,
        secondNumber,
        setFirstNumber,
        setSecondNumber,
      );
      cleanAfterResult(setFirstNumber, setSecondNumber, setOperation);
      break;
    case 'AC':
      setFirstNumber('');
      setSecondNumber('');
      setOperation('');
      setResult(0);
      break;
    case 'C':
      if (secondNumber) {
        setSecondNumber((prev: string) => prev.slice(0, -1));
        break;
      }
      if (operation) {
        setOperation('');
        break;
      }
      setFirstNumber((prev: string) => prev.slice(0, -1));
      break;
    case '+':
    case '/':
    case '*':
      if (!operation) {
        setOperation(toShow);
      }
      break;
    case '-':
      if (!firstNumber) {
        setFirstNumber('-');
      }
      if (!operation && firstNumber && firstNumber !== '-') {
        setOperation(toShow);
      }
      break;
    default:
      if (operation && !isOperation) {
        setSecondNumber((prev: string) => prev + toShow);
      }
      if (!operation && !isOperation) {
        setFirstNumber((prev: string) => prev + toShow);
      }
      break;
  }
};

const getResult = (
  operation: string,
  setResult: React.Dispatch<React.SetStateAction<number>>,
  firstNumber: string,
  secondNumber: string,
  setFirstNumber: React.Dispatch<React.SetStateAction<string>>,
  setSecondNumber: React.Dispatch<React.SetStateAction<string>>,
) => {
  switch (operation) {
    case '+':
      setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
      setFirstNumber(
        (parseFloat(firstNumber) + parseFloat(secondNumber)).toString(),
      );
      break;
    case '-':
      setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
      setFirstNumber(
        (parseFloat(firstNumber) - parseFloat(secondNumber)).toString(),
      );
      break;
    case '*':
      setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
      setFirstNumber(
        (parseFloat(firstNumber) * parseFloat(secondNumber)).toString(),
      );
      break;
    case '/':
      if (secondNumber === '0') {
        setSecondNumber('');
        break;
      }
      setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
      setFirstNumber(
        (parseFloat(firstNumber) / parseFloat(secondNumber)).toString(),
      );
      break;
    default:
      break;
  }
};

const cleanAfterResult = (
  setFirstNumber: React.Dispatch<React.SetStateAction<string>>,
  setSecondNumber: React.Dispatch<React.SetStateAction<string>>,
  setOperation: React.Dispatch<React.SetStateAction<string>>,
) => {
  setSecondNumber('');
  setOperation('');
};

const BUTTONS = [
  {
    isOperation: true,
    toShow: 'C',
    style: styles.bigButtonStyle,
  },
  {
    isOperation: true,
    toShow: 'AC',
    style: styles.bigButtonStyle,
  },
  {
    isOperation: false,
    toShow: '7',
  },
  {
    isOperation: false,
    toShow: '8',
  },
  {
    isOperation: false,
    toShow: '9',
  },
  {
    isOperation: true,
    toShow: '/',
  },
  {
    isOperation: false,
    toShow: '4',
  },
  {
    isOperation: false,
    toShow: '5',
  },
  {
    isOperation: false,
    toShow: '6',
  },
  {
    isOperation: true,
    toShow: '*',
  },
  {
    isOperation: false,
    toShow: '1',
  },
  {
    isOperation: false,
    toShow: '2',
  },
  {
    isOperation: false,
    toShow: '3',
  },
  {
    isOperation: true,
    toShow: '+',
  },
  {
    isOperation: false,
    toShow: '.',
  },
  {
    isOperation: false,
    toShow: '0',
  },
  {
    isOperation: true,
    toShow: '=',
    style: {
      backgroundColor: '#966BDE',
    },
  },
  {
    isOperation: true,
    toShow: '-',
  },
];

export {handleOnPress, getResult, BUTTONS};
