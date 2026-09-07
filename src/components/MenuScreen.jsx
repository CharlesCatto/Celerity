function MenuScreen({ menu, selectedKey }) {
  return (
    <div className="menu-screen">
      <div className="menu-content">

        <div className="menu-items">
          {menu.items.map((item) => (
            <div
              className="menu-item"
              key={item.key}
            >
              <span className="menu-key">
                {item.key}
              </span>

              <span className="menu-label">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="menu-choice">
          <span>Choix:</span>

          <span className="menu-choice-value">
            {selectedKey}
            {!selectedKey && ' '}
          </span>
        </div>

        <div className="warehouse">
          Entrepot/UC:357/01
        </div>

      </div>
    </div>
  );
}

export default MenuScreen;