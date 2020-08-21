import Article from "./Article";

type article = {
  id: string;
  type: string;
  title: string;
  date: string;
  hrVisible: boolean;
};

type Props = {
  articles: {
    firstArticle: article;
    secondArticle: article;
    leftArticles: article[];
    rightArticles: article[];
  };
};

function Articles({ articles }: Props) {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mx-2 sm:mx-2 md:mx-12 lg:mx-12 xl:mx-12">
      <div className="flex flex-col w-full sm:w-full md:w-full lg:w-46/100 xl:w-46/100">
        <div className="mx-2">
          <img src="/images/articles/news.jpg" alt="News" className="mb-6" />
        </div>
        <div className="mx-2">
          <Article
            key={articles.firstArticle.id}
            article={articles.firstArticle}
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

      <div className="flex flex-1 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="flex-1 mx-2">
          <Article
            key={articles.secondArticle.id}
            article={articles.secondArticle}
          />
          <img src="/images/articles/birds.jpg" alt="Birds" className="my-2" />
          {articles.leftArticles.map((article) => {
            return <Article key={article.id} article={article} />;
          })}
        </div>

        <div className="flex-1 mx-2">
          <hr className="mt-6 border-gray-400 " />
          {articles.rightArticles.map((article) => {
            return <Article key={article.id} article={article} />;
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
