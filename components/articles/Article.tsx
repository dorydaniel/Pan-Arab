type Props = {
  article: {
    id: string;
    type: string;
    title: string;
    date: string;
    hrVisible: boolean;
  };
};

function Article({ article }: Props) {
  let typeColor = "";
  switch (article.type) {
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
          {article.type}
        </p>
      </div>
      <div className="my-1">
        <p className="font-poppins-bold text-xl leading-8">{article.title}</p>
      </div>
      <div className="">
        <p className="font-poppins-light text-sm leading-3">{article.date}</p>
      </div>
      <hr
        className={`mt-6 border-gray-400 ${!article.hrVisible && "invisible"}`}
      />
    </div>
  );
}

export default Article;
