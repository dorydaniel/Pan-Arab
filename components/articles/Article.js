function Article({ type, title, date, hrVisible }) {
  let typeColor = "";
  switch (type) {
    case "Musique":
      typeColor = "text-red-700";
      break;
    case "Exhibition":
      typeColor = "text-green-700";
      break;
    case "Conference":
      typeColor = "text-yellow-600";
      break;
    case "Film":
      typeColor = "text-teal-500";
      break;
    case "Concert":
      typeColor = "text-blue-700";
      break;

    default:
      typeColor = "text-black";
      break;
  }

  return (
    <div className="flex flex-col my-6">
      <div className="">
        <p className={`${typeColor} font-poppins-bold text-sm leading-3`}>
          {type}
        </p>
      </div>
      <div className="my-1">
        <p className="font-poppins-bold text-xl leading-8">{title}</p>
      </div>
      <div className="">
        <p className="font-poppins-light text-sm leading-3">{date}</p>
      </div>
      <hr className={`mt-6 border-gray-400 ${!hrVisible && "invisible"}`} />
    </div>
  );
}

export default Article;
