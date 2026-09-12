import { useState } from 'react';

import Header from './components/Header';
import Keyboard from './components/Keyboard';
import LoginScreen from './components/LoginScreen';
import MenuScreen from './components/MenuScreen';

import menus from './data/menus';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [navigation, setNavigation] = useState(['main']);
  const [selectedKey, setSelectedKey] = useState('');

  const currentScreen = navigation[navigation.length - 1];
  const currentMenu = menus[currentScreen];

  const handleLogin = () => {
    setAuthenticated(true);
    setNavigation(['main']);
    setSelectedKey('');
  };

  const navigateTo = (screenId) => {
    setNavigation((previous) => [...previous, screenId]);
    setSelectedKey('');
  };

  const goBack = () => {
    setNavigation((previous) => {
      if (previous.length <= 1) {
        return previous;
      }
      return previous.slice(0, -1);
    });
    setSelectedKey('');
  };

  const handleKeyPress = (key) => {
    // -------------------------
    // CHIFFRE
    // -------------------------
    if (/^[0-9]$/.test(key)) {
      setSelectedKey(key);
      return;
    }

    // -------------------------
    // ENTER
    // -------------------------
    if (key === 'Enter' || key === '↵') {
      if (!selectedKey || !currentMenu) {
        return;
      }

      const selectedItem = currentMenu.items.find(
        (item) => item.key === selectedKey
      );

      if (selectedItem?.next) {
        navigateTo(selectedItem.next);
      }

      return;
    }

    // -------------------------
    // RETOUR
    // -------------------------
    if (key === '←' || key === 'P2') {
      if (key === 'P2' && navigation.length === 1) {
        setAuthenticated(false);
        setNavigation(['main']);
        setSelectedKey('');
        return;
      }

      goBack();
    }
  }; // <--- L'accolade manquante qui fermait handleKeyPress était ici !

  // -------------------------
  // LOGIN
  // -------------------------
  if (!authenticated) {
    return (
      <div className="app">
        <Header />
        <LoginScreen onLogin={handleLogin} />
      </div>
    );
  }

  // -------------------------
  // APPLICATION
  // -------------------------
  return (
    <div className="terminal">
      <Header />
      <MenuScreen menu={currentMenu} selectedKey={selectedKey} />
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
