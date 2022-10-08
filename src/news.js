import { useEffect, useState } from "react";

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=11bac121ba934559837336398c4bc599")
            .then((res) => res.json())
            .then((res) => {
                const filteredData = res?.articles?.map((article) => ({
                    title: article.title,
                    summary: article.description,
                    author: article.author,
                    link: article.url,
                }));
                setArticles(filteredData);
            })
            .catch((err) => {
                console.log(err, "errr");
            });
    }, []);

    return (
        <>
        <h3 className="container">Today's Headlines</h3>
        <div className="container">
            {articles.length > 0 ? (
                articles.map((article) => {
                    return (
                        <div className="card col my-2">
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {article.author}
                                </h6>
                                <p className="card-text">{article.summary}</p>
                                <a href={article.link} className="card-link">
                                    {article.link}
                                </a>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>No news yet...</div>
            )}
            </div>
        </>
    );
};

export default News;
