import { getOneRocketAsync } from "@/components/Redux/Slices/slice";
import store from "@/components/Redux/Store/store";
import { IRocket } from "@/Interfaces/interface";
import { FC } from "react";
import Layout from "@/components/Layout/layout";
import styles from "../../styles/Rocket.module.scss";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const correctId = id.replace(/\s/g, "").toLowerCase();
  await store.dispatch(getOneRocketAsync(correctId));
  const rocket = store.getState().rockets.oneRocket;
  console.log(correctId);

  return {
    props: {
      rocket,
    },
  };
};

interface RocketProps {
  rocket: IRocket;
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const Rocket: FC<RocketProps> = ({ rocket }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  //MUI

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout title={rocket.rocket_name}>
      <div className={styles.parent}>
        <div className={styles.title_block}>
          <h1>{rocket.rocket_name}</h1>
        </div>
        <div className={styles.img_block_1}>
          <img src={rocket.flickr_images[1]} alt="" />
        </div>
        <p className={styles.description}>{rocket.description}</p>
        <div className={styles.info_block_1}>
          <div className={styles.info_miniBlock_1}>
            <ul>
              <li>
                <span>Stages:</span>
                {rocket.stages}
              </li>
              <li>
                <span>Boosters:</span>
                {rocket.stages}
              </li>
              <li>
                <span>Cost:</span>
                {rocket.cost_per_launch}$
              </li>
              <li>
                <span>Success rate:</span>
                {rocket.success_rate_pct}%
              </li>
            </ul>
          </div>
          <div className={styles.info_miniBlock_2}>
            <ul>
              <li>
                <span>First flight:</span>
                {rocket.first_flight}
              </li>
              <li>
                <span>Country:</span>
                {rocket.country}
              </li>
              <li>
                <span>Comspanany:</span>
                {rocket.company}
              </li>
              <li>
                <span>Rocket type:</span> {rocket.rocket_type}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.img_block_2}>
          <img src={rocket.flickr_images[0]} alt="image" />
        </div>
        <h1>engineering characteristics</h1>
        <div className={styles.info_block_2}>
          <div>
            <img src={rocket.flickr_images[2]} alt="" />
          </div>
          <div>
            <h2>Height</h2>
            <p>Meters:{rocket.height.meters}m</p>
            <p>Feet:{rocket.height.feet}f</p>
            <h2>Diameter</h2>
            <p>Meters:{rocket.diameter.meters}m</p>
            <p>Feet:{rocket.diameter.feet}f</p>
            <h2>Mass</h2>
            <p>Kg:{rocket.mass.kg}kg</p>
            <p>Lb:{rocket.mass.lb}lb</p>
          </div>
        </div>
        <h1>Engines</h1>
        <div className={styles.info_block_3}>
          <div>
            <p data-aos="zoom-out-right">
              <span>Number:</span>
              {rocket.engines.number}
            </p>
            <p data-aos="zoom-out-right">
              <span>Type:</span>
              {rocket.engines.type}
            </p>
            <p data-aos="zoom-out-right">
              <span>Version:</span>
              {rocket.engines.version}
            </p>
            <p data-aos="zoom-out-right">
              <span>Layout:</span>
              {rocket.engines.layout}
            </p>
            <p data-aos="zoom-out-right">
              <span>Specific impulse:</span>
              <br />

              <span>Sea level:</span>
              {rocket.engines.isp.sea_level}
              <span>Vacuum:</span>
              {rocket.engines.isp.vacuum}
            </p>
            <p data-aos="zoom-out-right">
              <span>Propellant 1:</span>
              {rocket.engines.propellant_1}
            </p>
            <p data-aos="zoom-out-right">
              <span>Propellant 2:</span>
              {rocket.engines.propellant_2}
            </p>
            <p data-aos="zoom-out-right">
              <span>Thrust sea level:</span>
              <br />
              <span>kN:</span>
              {rocket.engines.thrust_sea_level.kN}
              <span>lbf:</span>
              {rocket.engines.thrust_sea_level.lbf}
            </p>
            <p data-aos="zoom-out-right">
              <span>Thrust vacuum:</span>
              <br />
              <span>kN:</span>
              {rocket.engines.thrust_vacuum.kN}
              <span>lbf:</span>
              {rocket.engines.thrust_vacuum.lbf}
            </p>
            <p data-aos="zoom-out-right">
              <span>Thrust to weight:</span>
              {rocket.engines.thrust_to_weight}
            </p>
            <p data-aos="zoom-out-right">
              <span>Landing legs:</span>
              <br />
              <span>Number:</span>
              {rocket.landing_legs.number}
              <br />
              <span>Material:</span>
              {rocket.landing_legs.material}
            </p>
          </div>
        </div>
        <div className={styles.img_block_1}>
          <img src={rocket.flickr_images[3]} alt="" />
        </div>
        <h1>Payload weights</h1>
        <div className={styles.info_block_4}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example">
            {rocket.payload_weights.length &&
              rocket.payload_weights.map(item => (
                <Tab label={item.id} {...a11yProps(0)} key={item.id} />
              ))}
          </Tabs>
          <div>
            {rocket.payload_weights.map((item, index) => {
              switch (index) {
                case value:
                  return (
                    <div key={item.id}>
                      <div>
                        <h2>{item.name}</h2>
                        <p>
                          <span>kg:</span>
                          {item.kg}kg
                        </p>
                        <p>
                          <span>lb:</span>
                          {item.lb}lb
                        </p>
                      </div>
                    </div>
                  );
                default:
                  break;
              }
            })}
          </div>
        </div>
        <h1>Stages</h1>
        <div className={styles.info_block_5}>
          <div className={styles.info5_miniBlock_1}>
            <h2>Stage 1</h2>
            <ul>
              <li>
                <span>Reusable:</span>
                {rocket.first_stage.reusable ? "True" : "False"}
              </li>
              <li>
                <span>Engines:</span>
                {rocket.first_stage.engines}
              </li>
              <li>
                <span>Fuel amount tons:</span>
                {rocket.first_stage.fuel_amount_tons}
              </li>
              <li>
                <span>Burn time:</span>
                {rocket.first_stage.burn_time_sec}s
              </li>
            </ul>
          </div>
          <hr className={styles.hr} />
          <div className={styles.info5_miniBlock_2}>
            <h2>Stage 2</h2>
            <ul>
              <li>
                <span>Reusable:</span>
                {rocket.second_stage.reusable ? "True" : "False"}
              </li>
              <li>
                <span>Engines:</span>
                {rocket.second_stage.engines}
              </li>
              <li>
                <span>Fuel amount tons:</span>
                {rocket.second_stage.fuel_amount_tons}
              </li>
              <li>
                <span>Burn time:</span>
                {rocket.second_stage.burn_time_sec}s
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.p}>
          For more information,{" "}
          <a href={rocket.wikipedia} target="_blanck">
            click here
          </a>
          <br />
        </p>
      </div>
    </Layout>
  );
};
export default Rocket;
