import { useEffect, useState } from "react";

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b507b8f252mshfb2e60d36346405p19922bjsnb8cb16024e30',
                'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
            }
        };
        fetch(
            'https://crypto-news-live3.p.rapidapi.com/news',
            options
            )
            .then((res) => res.json())
            .then((res) => {
                console.log('resp', res);
                res = res.slice(0,10);
                console.log('after resp', res);
                const filteredData = res?.map((article) => ({
                    title: article.title,
                    // summary: article.description,
                    // author: article.author,
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
                articles.map((article, index) => {
                    return (
                        <div className="card col my-2" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">
                                    {article.author}
                                </h6> */}
                                {/* <p className="card-text">{article.summary}</p> */}
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