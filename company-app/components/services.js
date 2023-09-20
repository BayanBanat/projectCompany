import { useRouter } from 'next/router'; // Import the useRouter hook

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/about.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const teamMembers = [
    {
        name: 'Building Construction ',
        major: 'We provide all aspects of construction and building work, from executing reinforcement works to everything related to infrastructure from start to finish.',
        image: 'https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais',


    },
    {
        name: 'Road Construction',
        major: 'We offer comprehensive road maintenance services, in addition to infrastructure and electrical works, such as lighting, power generation stations, transformers, communications, control, and more.',
        image: 'https://img.freepik.com/free-photo/road-construction_342744-602.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais',

    },
    {
        name: 'Water & Wastewater Network',
        major: 'We provide all services related to water network construction and maintenance, in addition to sewage and sanitation works.',
        image: 'https://img.freepik.com/free-photo/gray-pipe-with-water-coming-out-its-hole_181624-4705.jpg?size=626&ext=jpg&ga=GA1.1.1442964426.1687759231&semt=ais',

    },
    {
        name: 'Landscaping and site organization',
        major: 'Designing, landscaping, and maintaining all types of gardens, along with providing the best ideas to clients for decorating gardens with the latest methods and equipment.',
        image: 'https://img.freepik.com/free-photo/reforestation-done-by-voluntary-group_23-2149500824.jpg?w=996&t=st=1695228680~exp=1695229280~hmac=ac6303f834ab800b6c53c9895b103c7988d8f6f14c57b7bd8b692ca98ca449fe',

    },
    {
        name: 'Electrical and lighting works.',
        major: 'Installation and maintenance of electrical systems and lighting solutions.',
        image: 'https://img.freepik.com/free-photo/low-angle-shot-electric-linemen-working-pole_181624-46993.jpg?w=996&t=st=1695228852~exp=1695229452~hmac=77c3f5d36f15df3d04e1369f154e4425ebff95343abedb3bcd65f12d47c88284',

    },
    {
        name: ' maintenance of both main and submain water networks.',
        major: 'Design, installation, and maintenance of primary and submain water networks, ensuring efficient water distribution and delivery',
        image: 'https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9',

    },


];


const AboutPage = () => {
    const router = useRouter();


    return (
        <div style={{paddingTop:'20px' ,backgroundColor:'#fafafa'}}>
            <div className={styles.text}>
                <h2 className={styles.title__line}>OUR <span className={styles.text__theme}>SERVICES</span></h2>
                <p className={styles.titlep}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire</p>
            </div>
            <div style={{ padding: '50px' }}>
                <div id='about' className="flex items-center justify-center ">
                    <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative items-center justify-center overflow-hidden transition-shadow rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:shadow-black/30" >
                                <div className="h-96 w-72">
                                    <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={member.image} alt={member.name} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="text-2xl font-bold text-white font-dmserif">{member.name}</h1>
                                    <p className="mb-3 text-white transition-opacity duration-300 opacity-0 text-m group-hover:opacity-100">{member.major}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Footer style={{ flexShrink: 0 }} /> */}
        </div>
    );
};
export default AboutPage;