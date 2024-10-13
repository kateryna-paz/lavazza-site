import { useDispatch, useSelector } from "react-redux";
import styles from "./Contact.module.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useEffect } from "react";
import { fetchShops } from "../../store/features/shopsSlice";
import Loader from "../../components/UI/loader/Loader";

function Contact() {
  const dispatch = useDispatch();

  const { shops, isLoading, error } = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  return (
    <div className={styles.contacts}>
      <section className={styles.contactInfo}>
        <h1>Contacts</h1>
        <div className={styles.contactDetails}>
          <div className={styles.detailBlock}>
            <h2>Phone Numbers</h2>
            <p>+380(47)-433-3568</p>
            <p>+380(75)-543-6746</p>
          </div>
          <div className={styles.detailBlock}>
            <h2>Emails</h2>
            <p>info@lavazza.com</p>
            <p>support@lavazza.com</p>
          </div>
          <div className={styles.detailBlock}>
            <h2>Addresses</h2>
            <p>Office 1: 84 Main St, Zaporizhzhia, Ukraine</p>
            <p>Office 2: 97 High St, Zaporizhzhia, Ukraine</p>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <h2>Our Shops</h2>
        {isLoading && <Loader />}
        {!isLoading && !error && shops && shops.length > 0 && (
          <MapContainer
            center={[47.8464561, 35.1492677]}
            zoom={12}
            scrollWheelZoom={false}
            className={styles.mapContainer}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {shops.map((shop) => {
              return (
                <Marker key={shop.id} position={shop.position}>
                  <Popup>
                    CoffeeShop Lavazza
                    <br />
                    {shop.address}
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        )}
      </section>
    </div>
  );
}

export default Contact;
