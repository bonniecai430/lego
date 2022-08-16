import './ThemeList.css'
export default function ThemeList({ themes, activeTheme, setActiveTheme }) {
    const ths = themes.map(th =>
      <li
        key={th}
        className={th === activeTheme ? 'active' : ''}
        // FYI, the below will also work, but will give a warning
        // className={cat === activeCat && 'active'}
        onClick={() => setActiveTheme(th)}
      >
        {th}
      </li>
    );
    return (
      <ul className='ThemeList'>
        {ths}
      </ul>
    );
  }