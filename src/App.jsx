import LoginScreen from './components/LoginScreen';

function App() {
  const handleLogin = (userId) => {
    console.log('Login:', userId);
  };

  return (
    <LoginScreen onLogin={handleLogin} />
  );
}

export default App;