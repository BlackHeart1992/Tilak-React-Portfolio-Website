import "./portfolio.scss"

export default function Portfolio() {

    const list = [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt=""
                    />
                </div>
            </div>
        </div>
    )
}
