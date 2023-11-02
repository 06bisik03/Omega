import styles from "./Home.module.css";
import cyber from "../images/cyber.mp4";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>
            <div>
                Secure your data with confidence
            </div>
            <div>
            We provide the best security systems for clients all over the world
            </div>
            <div>
                <button className={styles.btn}>Get Started</button>
                <button className={styles.btn}>Explore More</button>
            </div>
        </div>
        <div>
        <video autoPlay loop muted poster={cyber}>
          <source src={cyber} type="video/mp4" />
          <source src={cyber} type="video/ogg" />
        </video>
        </div>
      
      </div>
    </div>
  );
};
export default Home;
