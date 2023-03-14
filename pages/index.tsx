import { useAppDispatch, useAppSelector } from "@/components/Redux/Hooks/hooks";
import { getAllRocketAsync } from "@/components/Redux/Slices/slice";
import store from "@/components/Redux/Store/store";
import { FC, useEffect } from "react";
import ReactSwipe from "react-swipe";
import styles from "../styles/Home.module.scss";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { IRocket } from "@/Interfaces/interface";
import Link from "next/dist/client/link";
import Layout from "@/components/Layout/layout";

//GET ROCKETS IN SERVER

interface IndexProps {
  rockets: IRocket[];
}

const Index: FC<IndexProps> = ({ rockets }) => {
  let reactSwipeEl: any;

  return (
    <Layout title={"Main"}>
      <main className={styles.main}>
        <div className={styles.title_block}>
          <h1>Welcome to SpaceX info page!</h1>
        </div>
        <div className={styles.swipper_block}>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: true }}
            ref={(el: any) => (reactSwipeEl = el)}>
            {rockets?.map(rocket => (
              <div key={rocket.id} style={{ height: "750px" }}>
                <img
                  src={rocket.flickr_images[0]}
                  alt="rocket"
                  className={styles.img}
                />

                <Link href={`Rocket/${rocket.rocket_name}`}>
                  <h1>{rocket.rocket_name}</h1>
                </Link>
              </div>
            ))}
          </ReactSwipe>
        </div>

        <div className={styles.button_group}>
          <ArrowBackIosNewRoundedIcon
            color="warning"
            fontSize="large"
            onClick={() => reactSwipeEl.prev()}
            className={styles.next_prev_button}
          />
          <ArrowForwardIosRoundedIcon
            onClick={() => reactSwipeEl.next()}
            fontSize="large"
            className={styles.next_prev_button}
            color="warning"
          />
        </div>

        <div className={styles.textInfo_block}>
          <p>
            Here you can explore any rocket created by <strong>SpaceX</strong>,
            click on the name of the rocket and immerse yourself in an
            interesting scientific journey!
          </p>
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  await store.dispatch(getAllRocketAsync());
  const rockets = store.getState().rockets.rockets;
  return {
    props: {
      rockets,
    },
  };
}

export default Index;
