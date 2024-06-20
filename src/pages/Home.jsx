import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import "./Home.css";
import Pagination from "../components/Pagination";
import Category from "../components/Category";

const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [category, setcategory] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [newsPerPage, setnewsPerPage] = useState(6);

  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //       const response = await axios.get(
      //         `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}`
      //       );
      //       console.log(response.data);
      setArticles(
        [
          {
            source: {
              id: "google-news",
              name: "Google News",
            },
            author: "CBS News",
            title:
              "What's open and closed for Juneteenth? See which stores and restaurants are operating today. - CBS News",
            description: null,
            url: "https://news.google.com/rss/articles/CBMiQWh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3Mvb3Blbi1jbG9zZWQtanVuZXRlZW50aC0yMDI0LWp1bmUtMTkv0gFFaHR0cHM6Ly93d3cuY2JzbmV3cy5jb20vYW1wL25ld3Mvb3Blbi1jbG9zZWQtanVuZXRlZW50aC0yMDI0LWp1bmUtMTkv?oc=5",
            urlToImage: null,
            publishedAt: "2024-06-19T14:16:16Z",
            content: null,
          },
          {
            source: {
              id: "google-news",
              name: "Google News",
            },
            author: "The Washington Post",
            title:
              "U.N. says Israeli use of bombs in civilian areas probably violated laws of war - The Washington Post",
            description: null,
            url: "https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS93b3JsZC8yMDI0LzA2LzE5L2lzcmFlbC1nYXphLWhhbWFzLXVuLWJvbWJzLW5ldGFueWFodS_SAQA?oc=5",
            urlToImage: null,
            publishedAt: "2024-06-19T13:53:23Z",
            content: null,
          },
          {
            source: {
              id: "espn",
              name: "ESPN",
            },
            author: "Adrian Wojnarowski",
            title: "Sources: Pistons fire Williams, still owe him $65M - ESPN",
            description:
              "After one season, the Pistons have dismissed coach Monty Williams, who leaves with five years and $65 million left on his deal, sources told ESPN's Adrian Wojnarowski.",
            url: "https://www.espn.com/nba/story/_/id/40385485/sources-pistons-fire-coach-monty-williams-one-season",
            urlToImage:
              "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1128%2Fr1259061_1296x729_16%2D9.jpg",
            publishedAt: "2024-06-19T13:39:00Z",
            content:
              "The Detroit Pistons fired coach Monty Williams after one season, absorbing the remaining $65 million remaining on his contract, sources told ESPN on Wednesday.\r\nNew Pistons president of basketball op… [+2661 chars]",
          },
          {
            source: {
              id: "espn",
              name: "ESPN",
            },
            author: "Adrian Wojnarowski",
            title: "Sources: Pacers' Siakam to ink $189.5M max deal - ESPN",
            description:
              "Pascal Siakam plans to sign a 4-year, $189.5M max contract to stay with the Pacers once the NBA's free agency moratorium ends on July 6, sources told ESPN.",
            url: "https://www.espn.com/nba/story/_/id/40385448/sources-pacers-pascal-siakam-sign-1895m-max-contract",
            urlToImage:
              "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0527%2Fr1338299_1296x729_16%2D9.jpg",
            publishedAt: "2024-06-19T13:25:00Z",
            content:
              "All-Star forward Pascal Siakam intends to sign a four-year, $189.5 million maximum contract to stay with the Indiana Pacers, sources told ESPN on Wednesday.\r\nPacers president of basketball operations… [+2109 chars]",
          },
          {
            source: {
              id: "google-news",
              name: "Google News",
            },
            author: "ABC News",
            title:
              "Environmental protesters spray 'orange powder paint' on Britain's Stonehenge - ABC News",
            description: null,
            url: "https://news.google.com/rss/articles/CBMibmh0dHBzOi8vYWJjbmV3cy5nby5jb20vSW50ZXJuYXRpb25hbC9lbnZpcm9ubWVudGFsLXByb3Rlc3RlcnMtc3ByYXktb3JhbmdlLXBhaW50LXN0b25laGVuZ2Uvc3Rvcnk_aWQ9MTExMjQ2Njgx0gFyaHR0cHM6Ly9hYmNuZXdzLmdvLmNvbS9hbXAvSW50ZXJuYXRpb25hbC9lbnZpcm9ubWVudGFsLXByb3Rlc3RlcnMtc3ByYXktb3JhbmdlLXBhaW50LXN0b25laGVuZ2Uvc3Rvcnk_aWQ9MTExMjQ2Njgx?oc=5",
            urlToImage: null,
            publishedAt: "2024-06-19T13:18:45Z",
            content: null,
          },
          {
            source: {
              id: null,
              name: "Hollywood Reporter",
            },
            author: "Lacey Rose",
            title:
              "Jon Hamm Doesn’t Want to Be Your Leading Man - Hollywood Reporter",
            description:
              "A decade after 'Mad Men,' the 53-year-old star is still wrestling with Don Draper's demons. But therapy, a new marriage and an avalanche of plum roles have helped smooth his ride.",
            url: "http://www.hollywoodreporter.com/tv/tv-features/jon-hamm-interview-fargo-mad-men-marriage-morning-show-1235925744/",
            urlToImage:
              "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/03_Horses_2030_v1_FF-SPLASH-2024.jpg?w=1024",
            publishedAt: "2024-06-19T13:00:39Z",
            content:
              "In January of 2022, Jon Hamm starred in a commercial titled “Everyone But Jon Hamm.” The minute-long spot, for Apple TV+, played off the idea that everyone in the industry seemed to have a television… [+22004 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "The Wall Street Journal",
            title:
              "Nvidia's Ascent to Most Valuable Company Has Echoes of Dot-Com Boom - The Wall Street Journal",
            description: null,
            url: "https://www.wsj.com/tech/ai/nvidias-ascent-to-most-valuable-company-has-echoes-of-dot-com-boom-dd836c90",
            urlToImage: null,
            publishedAt: "2024-06-19T12:55:00Z",
            content: null,
          },
          {
            source: {
              id: "the-washington-post",
              name: "The Washington Post",
            },
            author: "Jason Samenow, Ian Livingston",
            title:
              "Live updates: Heat wave to scorch Eastern U.S. with record high temperatures - The Washington Post",
            description:
              "A heat wave moving along the Northeast, East Coast and Mid-Atlantic will bring extreme and potentially record temperatures to multiple regions. Follow updates.",
            url: "https://www.washingtonpost.com/weather/2024/06/19/heat-wave-east-coast-temperatures-updates/",
            urlToImage:
              "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XHZ3DA44WNBGTKC5Z3D2EW3NS4.jpg&w=1440",
            publishedAt: "2024-06-19T12:46:42Z",
            content:
              "As a punishing heat dome continues to intensify over the northeastern United States, scores of record high temperatures are set to be broken Wednesday from Michigan to Maine, including in Detroit, Cl… [+673 chars]",
          },
          {
            source: {
              id: "cnn",
              name: "CNN",
            },
            author:
              "Simone McCarthy, Manveena Suri, Lucas Lilieholm, Radina Gigova",
            title:
              "Putin says Russia and North Korea will help each other if attacked, taking ties to a ‘new level’ - CNN",
            description:
              "Vladimir Putin said Russia and North Korea have ramped up ties to a “new level,” pledging to help each other if either nation is attacked in a “breakthrough” new partnership announced during the Russian president’s rare visit to the reclusive state.",
            url: "https://www.cnn.com/2024/06/19/asia/north-korea-russia-putin-visit-thursday-intl-hnk/index.html",
            urlToImage:
              "https://media.cnn.com/api/v1/images/stellar/prod/2024-06-19t052125z-1474180113-rc25e8a0shwz-rtrmadp-3-northkorea-russia.jpg?c=16x9&q=w_800,c_fill",
            publishedAt: "2024-06-19T12:17:00Z",
            content:
              "Vladimir Putin said Russia and North Korea have ramped up ties to a new level, pledging to help each other if either nation is attacked in a breakthrough new partnership announced during the Russian … [+8018 chars]",
          },
          {
            source: {
              id: null,
              name: "New York Post",
            },
            author: "Emily Crane",
            title:
              "Britney Spears posts cryptic photo hours after Justin Timberlake's DWI arrest - New York Post ",
            description:
              "The “Toxic” singer, 42, took to Instagram late Tuesday to toast the “little things” — just hours after her ex’s bloodshot-eyed mugshot started being shared widel…",
            url: "https://nypost.com/2024/06/19/us-news/britney-spears-posts-cryptic-cocktail-photo-hours-after-ex-justin-timberlakes-dwi-arrest/",
            urlToImage:
              "https://nypost.com/wp-content/uploads/sites/2/2024/06/newspress-collage-u430iv4eq-1718799964978.jpg?quality=75&strip=all&1718785632&w=1024",
            publishedAt: "2024-06-19T12:16:00Z",
            content:
              "Britney Spears has apparently broken her silence on ex-boyfriend Justin Timberlake’s alleged drunk driving bust by posting a cryptic snap of her fruity cocktail on social media.\r\nThe “Toxic” singer, … [+1981 chars]",
          },
          {
            source: {
              id: null,
              name: "YouTube",
            },
            author: null,
            title:
              "Viture Pro XR Review: A Great Upgrade to One of My Favorite Display Glasses - CNET",
            description:
              "Larger, brighter and smoother displays make all the difference, but a couple of its extra accessories help complete the picture.0:00 - Viture Pro XR Glasses0...",
            url: "https://www.youtube.com/watch?v=bdc9rcrZW8I",
            urlToImage:
              "https://i.ytimg.com/vi/bdc9rcrZW8I/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGF4gXiheMA8=&rs=AOn4CLAG6Sb3kfQ7w7zHaovOlugTADywog",
            publishedAt: "2024-06-19T12:00:39Z",
            content: null,
          },
          {
            source: {
              id: null,
              name: "CNET",
            },
            author: null,
            title:
              "Samsung HW-S800D Review: Magical Sound From a Skinny Soundbar - CNET",
            description:
              "Samsung managed to create a big sound from something barely thicker than a broomstick. It'll leave you scratching your head.",
            url: "https://www.cnet.com/tech/home-entertainment/samsung-hw-s800d-review-magical-sound-from-a-skinny-soundbar/",
            urlToImage:
              "https://www.cnet.com/a/img/resize/e542958706afa314dc6e651bc2dc4713e4c99a75/hub/2024/06/18/0377f01c-78d0-4c17-a2f5-e30fb776bf5b/samsung-hw-s800d-04.jpg?auto=webp&fit=crop&height=675&width=1200",
            publishedAt: "2024-06-19T12:00:00Z",
            content:
              "The Samsung HW-S800D reminds me of the three-piece Bose Acoustimass sound system. When I was a kid, I had a friend whose family owned an Acoustimass -- two sets of tiny angled cube speakers and a sub… [+6837 chars]",
          },
          {
            source: {
              id: null,
              name: "[Removed]",
            },
            author: null,
            title: "[Removed]",
            description: "[Removed]",
            url: "https://removed.com",
            urlToImage: null,
            publishedAt: "1970-01-01T00:00:00Z",
            content: "[Removed]",
          },
          {
            source: {
              id: "google-news",
              name: "Google News",
            },
            author: "NPR",
            title:
              "NASA has delayed the undocking of Boeing's Starliner capsule until next week - NPR",
            description: null,
            url: "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3Lm5wci5vcmcvMjAyNC8wNi8xOS9ueC1zMS01MDEwNDQwL25hc2EtaGFzLWRlbGF5ZWQtdGhlLXVuZG9ja2luZy1vZi1ib2VpbmdzLXN0YXJsaW5lci1jYXBzdWxlLXVudGlsLW5leHQtd2Vla9IBAA?oc=5",
            urlToImage: null,
            publishedAt: "2024-06-19T11:15:29Z",
            content: null,
          },
          {
            source: {
              id: "ign",
              name: "IGN",
            },
            author: "Ryan Dinsdale",
            title:
              "Zelda Fans Are Very Excited to Get Violent as Princess Zelda in Echoes of Wisdom - IGN",
            description:
              "The Legend of Zelda: Echoes of Wisdom was announced by Nintendo as a game without Link leading the way and fans seem very excited to instead get violent as Princess Zelda.",
            url: "https://www.ign.com/articles/zelda-fans-are-very-excited-to-get-violent-as-princess-zelda-in-echoes-of-wisdom",
            urlToImage:
              "https://assets-prd.ignimgs.com/2024/06/19/zelda-1718792976722.jpg?width=1280",
            publishedAt: "2024-06-19T11:01:34Z",
            content:
              "The Legend of Zelda: Echoes of Wisdom was announced by Nintendo as a game without Link leading the way and fans seem very excited to instead get violent as Princess Zelda.\r\nThe game, which many are j… [+2987 chars]",
          },
          {
            source: {
              id: null,
              name: "AL.com",
            },
            author: "Mark Heim | mheim@al.com",
            title:
              "Country music singer’s estranged wife accuses him of ‘extreme’ abuse - AL.com",
            description:
              "Last week, singer filed a motion seeking an emergency temporary restraining order against wife.",
            url: "https://www.al.com/life/2024/06/country-music-singers-estranged-wife-accuses-him-of-extreme-abuse.html",
            urlToImage:
              "https://www.al.com/resizer/v2/7VLSEQWYA5DNTK5ZGSMNUOMKEQ.jpg?auth=af269b1fa0365d05cb007f0edbdd24d7e3b7f1f7f34ff626111068393f9c8a58&width=1280&quality=90",
            publishedAt: "2024-06-19T11:01:00Z",
            content:
              "The wife of Billy Ray Cyrus is accusing the country music singer of extreme verbal, emotional and psychological abuse.\r\nThe claims, reported by PEOPLE, comes days after news broke that Cyrus filed a … [+1284 chars]",
          },
          {
            source: {
              id: "google-news",
              name: "Google News",
            },
            author: "POLITICO",
            title:
              "Amy Coney Barrett may be poised to split conservatives on the Supreme Court - POLITICO",
            description: null,
            url: "https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnBvbGl0aWNvLmNvbS9uZXdzLzIwMjQvMDYvMTkvYW15LWNvbmV5LWJhcnJldHQtc3VwcmVtZS1jb3VydC1jb25zZXJ2YXRpdmVzLXJpZnQtMDAxNjQwNDfSAQA?oc=5",
            urlToImage: null,
            publishedAt: "2024-06-19T11:00:00Z",
            content: null,
          },
          {
            source: {
              id: null,
              name: "MarketWatch",
            },
            author: "Steve Goldstein",
            title:
              "Gold can help hedge inflation risks of Republican sweep, says Goldman Sachs - MarketWatch",
            description:
              "Strategists at Goldman Sachs say gold is a way to hedge the inflation risks stemming from the U.S. election.",
            url: "https://www.marketwatch.com/story/gold-can-help-hedge-inflation-risks-of-republican-sweep-says-goldman-sachs-7f8a7fc9",
            urlToImage: "https://images.mktw.net/im-29995972/social",
            publishedAt: "2024-06-19T10:47:00Z",
            content:
              "Strategists at Goldman Sachs say gold is a way to hedge the inflation risks stemming from the U.S. election.\r\nTheir view is that a Republican sweep in presidential and Congressional elections would p… [+215 chars]",
          },
          {
            source: {
              id: "nbc-news",
              name: "NBC News",
            },
            author: "Patrick Smith",
            title:
              "First tropical storm of the season heads for Texas as extreme heat wave hits the Northeast - NBC News",
            description:
              "The United States was buffeted by extreme weather Wednesday, with Texas bracing for the first tropical storm of the hurricane season while the Northeast still faced a major heat wave.",
            url: "https://www.nbcnews.com/news/us-news/tropical-storm-texas-extreme-heat-wave-northeast-rcna157893",
            urlToImage:
              "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240619-newmexico-fire-wc-1158-99d51b.jpg",
            publishedAt: "2024-06-19T10:44:43Z",
            content:
              "The United States was buffeted by extreme weather Wednesday, with Texas bracing for the first tropical storm of the hurricane season while the Northeast still faced a major heat wave.\r\nSouthern Texas… [+3228 chars]",
          },
          {
            source: {
              id: null,
              name: "CNBC",
            },
            author: "Jenni Reid",
            title:
              "Bank of England set to hold interest rates despite inflation hitting 2% target - CNBC",
            description:
              "Services inflation and wage growth both remain significantly above the level desired by monetary policymakets.",
            url: "https://www.cnbc.com/2024/06/19/bank-of-england-set-to-hold-rates-despite-inflation-hitting-target.html",
            urlToImage:
              "https://image.cnbcfm.com/api/v1/image/107430853-1718793840829-gettyimages-1998366297-20240210_city_thames_sunset_004.jpeg?v=1718793848&w=1920&h=1080",
            publishedAt: "2024-06-19T10:33:29Z",
            content:
              "LONDON The U.K. had some cause for celebration on Wednesday morning, as headline inflation hit the Bank of England's 2% target for the first time in nearly three years.\r\nBut the print only served to … [+3996 chars]",
          },
        ].filter((article) => {
          return article.title != "[Removed]" && article.urlToImage != null;
        })
      );
    }

    fetchData();
  }, [category]);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentArticles = Articles.slice(firstNewsIndex, lastNewsIndex);

  return (
    <>
      <Category category={category} setcategory={setcategory} />
      {<NewsCard articles={currentArticles} />}
      {
        <Pagination
          totalNews={Articles.length}
          newsPerPage={newsPerPage}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
        />
      }
    </>
  );
};

export default Home;
