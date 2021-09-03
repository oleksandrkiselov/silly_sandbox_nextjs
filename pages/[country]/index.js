import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';
import Header from '../../components/Header';

const Home = ({shows, country}) => {

const renderShows = () => {
    return shows.map((showItem, index) =>{

        const {show} = showItem;

        return (
            <li key={index}>
                <Thumbnail 
                    imageUrl={ (show.image && show.image.medium)|| undefined } 
                    caption={show.name} 
                    href='/[country]/[showId]'
                    as={`/${country}/${show.id}`}/>
            </li>
        )
    });
}

    return (
        <div className="home">
            <Header />
            <ul className="tvshows-grid"> 
                { renderShows() }

                <style jsx>{`
                    .tvshows-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                        padding: 0;
                        margin: 0;
                        list-style-type: none;
                    }
                `}</style>
            </ul>        
        </div>
    )
}

   Home.getInitialProps = async (context) => {
     const country = context.query.country || 'us';
     const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);

     return {
         shows: response.data,
         country
     }
 }  

export default Home;


/*  export async function getStaticPaths() {
    return axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then(response => {
            let paths = [];
            response.data.forEach(element => {
                paths.push({
                    params: {
                        country: element.alpha2Code.toLowerCase()
                    }
                });
            });
            return {paths, fallback: false}; 
        })
}  */



/*

export async function getStaticPaths() {

    const countryCodes = ['br', 'ua', 'de', 'be'];
    let paths = [];

    countryCodes.forEach(el => {
        paths.push({
            params: {
                country: el
            }
        });
    })
    return {paths, fallback: false}; 
} 

 export async function getStaticProps ({ params }) {
    const country = params.country || 'us';
    const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);

    return { props: {
            shows: response.data,
            country
            } 
        }
    
}; 

*/
