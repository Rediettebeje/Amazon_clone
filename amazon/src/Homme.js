import React from "react";
import "./Homme.css";
import Product from "./Product";
import NewProduct from "./NewProduct";
import SliderImage from "./SliderImage";
import Html from "./Html";

function Homme() {
  return (
    <div className="home container">
      <img
        className='home_image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
      />
      <div className="home_image">
        <SliderImage />
      </div>
      <div className="home_row">
        <NewProduct
          title="4+ star deals for you"
          image1="https://m.media-amazon.com/images/I/71yCYk7yeQL._AC_SY145_.jpg"
          image2="https://m.media-amazon.com/images/I/611owqbxXmL._AC_SY145_.jpg"
          image3="https://m.media-amazon.com/images/I/71-V+lFOAuL._AC_SY145_.jpg"
          image4="https://m.media-amazon.com/images/I/51x5oe1DZEL._AC_SY145_.jpg"
        />
        <NewProduct
          title="Deals for you in Home"
          image1="https://m.media-amazon.com/images/I/71PqGnGxXKL._AC_UL320_.jpg"
          image2="https://m.media-amazon.com/images/I/61O7VHZtmgL._AC_SR180,120_QL70_.jpg"
          image3="https://m.media-amazon.com/images/I/815AtkehJEL._AC_UL320_.jpg"
          image4="https://m.media-amazon.com/images/I/61bt8VIQFIL._AC_UL320_.jpg"
        />
        <NewProduct
          title="Deals for you on top brands"
          image1="https://m.media-amazon.com/images/I/812US1t12mL._AC_UL320_.jpg"
          image2="https://m.media-amazon.com/images/I/61VC8mrZGfL._AC_UL320_.jpg"
          image3="https://m.media-amazon.com/images/I/81zxsIBhrgL._AC_UL320_.jpg"
          image4="https://m.media-amazon.com/images/I/61013UAziIL._AC_UL320_.jpg"
        />
        <Html
          title="Deals on summer must-haves"
          image1="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/EVENTS/PD_23/GW/QC/Desktop/1X/QuadCard_1x_d_PD_Dresses_G4._SY116_CB602648082_.jpg"
          image2="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/EVENTS/PD_23/GW/QC/Desktop/1X/QuadCard_1x_d_PD_Swim_G3._SY116_CB602648082_.jpg"
          image3="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/EVENTS/PD_23/GW/QC/Desktop/1X/QuadCard_1x_d_PD_Sandals_G2._SY116_CB602648082_.jpg"
          image4="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/EVENTS/PD_23/GW/QC/Desktop/1X/QuadCard_1x_d_PD_Alldeals_G1._SY116_CB602430061_.jpg"
          imageDescription
        />
      </div>
      <div className="home_row">
        <Product
          id="11111111"
          title="100PCS Disposable Air Fryer Liner, Unleasched Round Large Parchment Baking Paper for 4-8 Qt Airfryer"
          price={24}
          rating={5}
          image="https://m.media-amazon.com/images/I/51yU3Dv0r0L._SY500__AC_SY200_.jpg"
        />
        <Product
          id="11111112"
          title="Freo Robot Vacuum and Mop Combo, Robot Mop and Vacuum with Auto Mop Washing & Drying, Dirt Sense Ultra Clean, Auto Ad"
          price={1099}
          rating={5}
          image="https://m.media-amazon.com/images/I/31pMcj4FxhL._AC_UF226,226_FMjpg_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="11111113"
          title="48X30 Inch Black Metal Framed Bathroom Mirror for Wall, Matte Black Bathroom Vanity Mirror Farmhouse"
          price={179}
          rating={5}
          image="https://m.media-amazon.com/images/I/41oBrMeel3L._AC_UF226,226_FMjpg_.jpg"
        />
        <Product
          id="11111114"
          title="20''x28'' LED Bathroom Mirror with Front + Backlit, Tempered Glass "
          price={134}
          rating={3}
          image="https://m.media-amazon.com/images/I/71Sn3LymS5L._AC_UL320_.jpg"
        />
        <Product
          id="11111115"
          title="4 Pack Glass Qtip Holder Dispenser, 10-Ounce Restroom Bathroom Organizers and Storage Containers, Apothecary Jar"
          price={18}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Mdo+92NTL._AC_UL320_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="111111116"
          title="3- Section Makeup Brush Organizer for Bathroom Vanity - Plastic Brush Holder for Makeup - Storage Cup for Eyeliner"
          price={11}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Mo0fIq05L._AC_UL160_SR160,160_.jpg"
        />
        <Product
          id="11111117"
          title="Tbestmax Makeup Brush Holder Organizer Clear Cosmetic Brushes Container Storage 3 Slots - Great for Vanity"
          price={7.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71WLObxLtHL._AC_UL160_SR160,160_.jpg"
        />
        <Product
          id="11111118"
          title="Tier Acrylic Perfume Organizer, Perfume Display Tray for Dresser and Countertop, Clear Acrylic Bathroom Countertop "
          price={19}
          rating={4}
          image="https://m.media-amazon.com/images/I/71RSFBRVprL._AC_UL320_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="11111119"
          title="chunky heels for women Clear Block Heels strappy platform sandals Ankle Strap Sandals Adjustable Buckle Lucite Chunky High Heel Shoes"
          price={34.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61f6z+X4CbL._AC_UL320_.jpg"
        />
        <Product
          id="11111110"
          title="Silver Clear Heels For Women Dress Shoes Transparent Strap Sexy Stilletos "
          price={39.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61lub-XYU9L._AC_SR160,134_QL70_.jpg"
        />
        <Product
          id="11111120"
          title="alsa Sexy High Heels for Women, Oval Open Toe Shoes Heels"
          price={49.99}
          rating={6}
          image="https://m.media-amazon.com/images/I/61VLYuxTSkL._AC_UL320_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="11111121"
          title="SAMSUNG 98-Inch Class Neo QLED 4K UHD QN90A Series Mini LED Quantum HDR 64x, Object Tracking Sound+, Ultra Viewing Angle, Smart TV with Alexa Built-In"
          price={14997}
          rating={3}
          image="https://m.media-amazon.com/images/I/81oiXfmqwwS._AC_UL320_.jpg"
        />
      </div>
      <div className="home_row">
        {/* < Html
  title="4+ star deals for you"
          image1="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Summer23/SUM23_HP_July_Home_Improvement_QuadCard_D_01_186x116._SY116_CB588015358_.jpg"
          image2="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Summer23/SUM23_HP_July_Home_Improvement_QuadCard_D_02_186x116._SY116_CB588082032_.jpg"
          image3="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Summer23/SUM23_HP_July_Home_Improvement_QuadCard_D_03_186x116._SY116_CB588082032_.jpg"
        image4="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Summer23/SUM23_HP_July_Home_Improvement_QuadCard_D_04_186x116._SY116_CB588082032_.jpg"
        imageDescription
        /> */}
      </div>
    </div>
  );
}

export default Homme;
