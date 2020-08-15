import Article from "./Article";

function Articles() {
  const leftArticles = [
    {
      id: "article3",
      type: "Musique",
      title: "LIVE STREAM: IBRAHIM MAALOUF",
      date: "07/06/2020 à 17:00",
      hrVisible: true,
    },
    {
      id: "article4",
      type: "Exhibition",
      title: "BAR FAROUKF",
      date: "07/06/2020 à 17:00",
      hrVisible: true,
    },
    {
      id: "article5",
      type: "Conference",
      title: "KAFR KASSEM",
      date: "07/06/2020 à 17:00",
      hrVisible: true,
    },
    {
      id: "article6",
      type: "Film",
      title: "LES LIBANAIS, UN PEUPLE URBANISÉ",
      date: "07/06/2020 à 17:00",
      hrVisible: false,
    },
  ];

  const rightArticles = [
    {
      id: "article7",
      type: "Exhibition",
      title: "LAST DAYS, ETEL ADNAN",
      date: "07/06/2020 à 17:00",
      hrVisible: true,
    },
    {
      id: "article8",
      type: "Film",
      title: "MASKOON FANTASTIC FILM FESTIVAL",
      date: "07/06/2020 à 17:00",
      hrVisible: true,
    },
    {
      id: "article9",
      type: "Musique",
      title: "NOSTALGIC EXPRESSIONS, GEBRAN VLADIMIR YAZIGI",
      date: "07/06/2020 à 17:00",
      hrVisible: true,
    },
    {
      id: "article10",
      type: "Musique",
      title: "NOSTALGIC EXPRESSIONS, GEBRAN VLADIMIR YAZIGI",
      date: "07/06/2020 à 17:00",
      hrVisible: true,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mx-2 sm:mx-2 md:mx-12 lg:mx-12 xl:mx-12">
      <div className="flex flex-col w-full sm:w-full md:w-full lg:w-46/100 xl:w-46/100 mx-2">
        <div>
          <img src="/images/articles/news.jpg" alt="News" className="mb-6" />
        </div>
        <div>
          <Article
            key="article1"
            type="Musique"
            title="ANTONINE UNIVERSITY CHOIR LIVE IN CONCERT"
            date="07/06/2020 à 17:00"
            hrVisible={false}
          />
          <p className="font-poppins-light text-gray-700 pr-12 mb-4">
            The Antonine University Choir has been exploring a variety of
            scenarios that would enable it to perform while duly observing all
            COVID-19 measures in force.
            <br />
            <br />
            The performance, during which the singers maintain a distance of
            1.75 m from one another, has shown it is actually possible to
            perform vocal works scored for a medium-sized choir in such an
            arrangement, and – at least for the moment – without an audience.
            <br />
            <br />
            Tune in to our live stream performance on Sunday June 7th at 5:00
            p.m. on our Facebook page, as we will be interpreting masterpieces
            from Mozart, Rossini, Verdi, Gounod, Puccini, Bellini, and others,
            straight from the Antonine University main campus.
          </p>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="flex-1 mx-2">
          <Article
            key="article2"
            type="Concert"
            title="ONLINE GALLERY, SELECTED WORKS"
            date="07/06/2020 à 17:00"
            hrVisible={true}
          />
          <img src="/images/articles/birds.jpg" alt="Birds" className="my-2" />
          {leftArticles.map((article) => {
            return (
              <Article
                key={article.id}
                type={article.type}
                title={article.title}
                date={article.date}
                hrVisible={article.hrVisible}
              />
            );
          })}
        </div>

        <div className="flex-1 mx-2">
          <hr className="mt-6 border-gray-400" />
          {rightArticles.map((article) => {
            return (
              <Article
                key={article.id}
                type={article.type}
                title={article.title}
                date={article.date}
                hrVisible={article.hrVisible}
              />
            );
          })}
          <img
            src="/images/articles/medical.png"
            alt="Medical Image"
            className="mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Articles;
