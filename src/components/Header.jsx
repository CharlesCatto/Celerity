function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="zebra">ZEBRA</span>
      </div>
      <div className="header-center">
        <span className="time">12:56</span>
        <span className="battery">🔋 0</span>
      </div>
      <div className="header-right">
        <span className="title">Warehouse Management</span>
      </div>
    </header>
  );
}

export default Header;