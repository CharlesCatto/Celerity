function MenuScreen({ menu, selectedKey }) {
  if (!menu) {
    return null;
  }

  return (
    <main className="wms-screen menu-screen">
      <div className="menu-content">

        {menu.title && (
          <div className="menu-title">
            {menu.title}
          </div>
        )}

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
            {selectedKey || ' '}
          </span>
        </div>

        <div className="warehouse">
          Entrepot/UC:357/01
        </div>

      </div>
    </main>
  );
}

export default MenuScreen;