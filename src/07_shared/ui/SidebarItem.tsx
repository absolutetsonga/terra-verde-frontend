type Props = {
  href: string;
  text: string;
  badgeText?: string;
  badgeColor?: string;
};

const SidebarItem = ({ href, text, badgeText, badgeColor }: Props) => {
  return (
    <li>
      <a
        href={href}
        className="relative flex flex-row items-center h-11 focus:outline-none border-l-4 border-transparent hover:border-indigo-500 pr-6"
      >
        <span className="ml-2 text-sm tracking-wide truncate">{text}</span>
        {badgeText && (
          <span
            className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide ${badgeColor} bg-${badgeColor}-50 rounded-full`}
          >
            {badgeText}
          </span>
        )}
      </a>
    </li>
  );
};

export default SidebarItem;
