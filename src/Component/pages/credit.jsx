import React from "react";

const Credit = () => {
  return (
    <div className="h-screen bg-slate-100">
      <div className="py-12 px-4 sm:px-6 lg:px-8 relative top-20">
        <h1 className="text-3xl font-bold mb-4 text-center">Developer Team</h1>
        <div className="max-w-7xl mx-auto bg-white w-10/12 flex justify-center items-center rounded-[30px]">
          <div className="w-full flex flex-col items-center py-6 px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="col-span-2 lg:col-span-1">
                <ImageBox
                  size="large"
                  names={["Prashant Bhushal", "Backend Developer"]}
                  imageUrl="https://scontent.fkep4-1.fna.fbcdn.net/v/t39.30808-1/448374193_478101607923068_5705254093373789833_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=-Q6U2bonkYcQ7kNvgGJxpfA&_nc_ht=scontent.fkep4-1.fna&oh=00_AYCP2zv9P7ELGogw3XdegO77gctiFhFwdEscT7IEWJ6rVg&oe=668D5D04"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <ImageBox
                  size="large"
                  names={["Niraj Panthi", "Frontend Developer"]}
                  imageUrl="https://scontent.fkep4-1.fna.fbcdn.net/v/t39.30808-6/329228144_8879728285435937_2427796055881368271_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_c9bh_u5gmEQ7kNvgGgm9nr&_nc_ht=scontent.fkep4-1.fna&oh=00_AYAheF7quaQ3DaRbsLWA2jJZOF2DlUO6pC0__12Opy3N2A&oe=668D3BDD"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageBox = ({ names, imageUrl, size }) => {
  const imageSizeClass = size === "large" ? "w-32 h-32" : "w-24 h-24";

  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-full mb-4">
      <img
        src={imageUrl}
        alt={names[0]}
        className={`object-cover ${imageSizeClass} mx-auto`}
      />
      <div className="p-2 text-center font-semibold">
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default Credit;
