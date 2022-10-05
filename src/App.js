import { useState } from 'react';



function App() {
    const [title, setTitle] = useState("SRINIVASA RAO GANTA");
    const [desc, setDesc] = useState("I have completed My Batchelors in 2019, and i have solid 3 years of experience on ecommerce application where i worked on java, spring boot, mongoDB, sql, neo4j,elastic search, GCP, kubernetes,drools");

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand ml-3" href="/">
                    <img
                        src="/assets/ualbanyLogo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top mx-2"
                        alt=""
                    />
                    <span className="mx-2">MY_UALBANY_PROFILE</span>
                </a>
                <div className='pr-3'>{title}</div>
            </nav>
            <div className="row mt-3">
                <div className="col-md-auto">
                    <img
                        src="https://cdn2.vectorstock.com/i/thumb-large/46/76/person-gray-photo-placeholder-man-material-design-vector-23804676.jpg"
                        height="300"
                        width="300"
                        alt="profile pic"
                    />
                </div>
                <div className="col">
                    <h3 className="m-3">{title}</h3>
                    <div className="m-3">{desc}</div>
                </div>
            </div>
            <form className='m-3 mt-3'>
                <div className="form-group">
                    <label for="titleField">Change Title</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="titleField"
                        aria-describedby="titleField"
                        placeholder="Enter title"
                        onChange={(e) => e.target.value ? setTitle(e.target.value) : setTitle('Title')}
                    />
                </div>
                <div className="form-group">
                    <label for="descField">Change Description</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="descField"
                        aria-describedby="descField"
                        placeholder="Enter description"
                        onChange={(e) => e.target.value ? setDesc(e.target.value) : setDesc('desc')}
                    />
                </div>
            </form>
        </div>
    );
}

export default App;
