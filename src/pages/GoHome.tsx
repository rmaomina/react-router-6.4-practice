import { useNavigate } from 'react-router-dom';

function GoHome() {
  const SECOND = 3000;
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, SECOND);

  return (
    <div>
      <h1>GoHome</h1>
      <p>{SECOND / 1000}초 뒤에 메인으로 이동합니다. </p>
    </div>
  );
}

export default GoHome;
