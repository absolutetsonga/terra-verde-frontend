type Props = {
  title: string;
};

const SidebarSection = ({ title }: Props) => {
  return (
    <li className="px-5">
      <div className="flex flex-row items-center h-8">
        <div className="text-sm font-light tracking-wide text-gray-200">
          {title}
        </div>
      </div>
    </li>
  );
};

export default SidebarSection;
