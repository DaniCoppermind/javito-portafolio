import NavTabs from './NavTabs';

const NavLinks = ({ navTabs, selected, setSelected, className }) => {
  return (
    <ul className={className}>
      {navTabs.map(tab => (
        <NavTabs
          text={tab.name}
          to={tab.path}
          selected={selected === tab.name}
          setSelected={setSelected}
          key={tab.name}
        />
      ))}
    </ul>
  );
};

export default NavLinks;
