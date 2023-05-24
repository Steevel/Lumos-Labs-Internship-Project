const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row pt-14">
      <div className="flex justify-center w-full pt-8 md:w-1/2">
        <img src="../../public/assets/AboutImage.png" alt="" />
      </div>
      <div className="w-full text-center md:w-1/2 md:text-left">
        <h2 className="text-4xl text-center text-white md:text-start ">
          Lumos Metaverse
        </h2>
        <h4 className="text-2xl text-center text-white md:text-start">
          The BUIDLer’s gateway to Web3
        </h4>
        <div className="px-4 pb-3 md:px-0 pt-7">
          <p className="text-white">
            Since we started in 2018, we’ve been passionate about perpetuating
            the #BUIDL culture to enable developers to become BUIDLers - active
            stakeholders contributing to the Web3 ecosystem.
            <br />
            <br />
            We worked with note-worthy Web3 players like Polkadot, Binance,
            NEAR, Polygon, the State Government of Telangana and more, to
            conduct 50+ innovation programmes to encourage developers to BUIDL.
            <br />
            <br />
            Our efforts helped over 60,000 builders with a collective US $10M
            through grants and prizes to support their innovation journeys.
          </p>
        </div>

        <button className="text-[#FDC506] border border-[#FDC506] mt-4 px-4 font-BrinnanRegular py-3 text-xs w-fit rounded hover:bg-[#FDC506] hover:text-[#260A37]">
          LEARN MORE
          <span>↗</span>
        </button>
      </div>
    </div>
  );
};

export default About;
