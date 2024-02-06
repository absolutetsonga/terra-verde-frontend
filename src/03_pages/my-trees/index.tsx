import Image from "next/image";

const gridItems = [
  {
    imageSrc: "1.svg",
    title: "Terra Verde",
    description: "Terra Verde",
  },
  {
    imageSrc: "1.svg",
    title: "Terra Verde",
    description: "Terra Verde",
  },
  {
    imageSrc: "1.svg",
    title: "Terra Verde",
    description: "Terra Verde",
  },
  {
    imageSrc: "1.svg",
    title: "Terra Verde",
    description: "Terra Verde",
  },
  {
    imageSrc: "1.svg",
    title: "Terra Verde",
    description: "Terra Verde",
  },
  {
    imageSrc: "1.svg",
    title: "Terra Verde",
    description: "Terra Verde",
  },
  {
    imageSrc: "1.svg",
    title: "Terra Verde",
    description: "Terra Verde",
  },
  {
    imageSrc: "1.svg",
    title: "Terra Verde",
    description: "Terra Verde",
  },
];

type Props = {
  imageSrc: string;
  title: string;
  description: string;
};

const GridItem = ({ imageSrc, title, description }: Props) => {
  return (
    <div className="flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm bg-primary">
      <div className="h-auto">
        <div className="h-60 overflow-hidden relative">
          <Image src={imageSrc} alt="" width={400} height={400} />
        </div>
      </div>
      <div className="bg-white py-4 px-3">
        <h3 className="text-md mb-2 font-medium">Name: {title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const MyTreesPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center overflow-hidden py-6 sm:py-12 bg-background">
      <div className="grid w-full sm:max-w-3xl md:max-w-5xl justify-center items-center sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {gridItems.map((item, index) => (
          <div className="flex justify-center items-center" key={index}>
            <GridItem
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
