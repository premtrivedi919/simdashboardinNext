import Page from "../components/page";
import BasicCard from "@/components/card";
import ResponsiveAppBar from "../components/header.js";
const SignIn = () => {
  return (
    <>
      <ResponsiveAppBar />

      <div className="strategycont">
        <div className="aligntext">
          <div>
            <span class="c1">Equity</span> <span class="c11">US</span>
          </div>
          <div className="c2">View all</div>
        </div>

        <div className="cardstrategy">
          <BasicCard word="RF 100 -15M" tag1="Investment -" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment -" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment -" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment -" tag2="ROI" tag3="Drawdown" tag4="users-following" />
        </div>
      </div>
      <div className="strategycont">
        <div className="aligntext">
          <div>
            <span className="c1">Equity</span> <span className="c11">India</span>
          </div>
          <div className="c2">View all</div>
        </div>

        <div className="cardstrategy">
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment  " tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
        </div>
      </div>


    <div className="strategycont">
        <div className="aligntext">
          <div>
            <span className="c1">Options</span> <span className="c11">India</span>
          </div>
          <div className="c2">View all</div>
        </div>

        <div className="cardstrategy">
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
        </div>
      </div>


     <div className="strategycont">
        <div className="aligntext">
          <div>
            <span className="c1">Spot</span> <span className="c11">Forex</span>
          </div>
          <div class="c2">View all</div>
        </div>

        <div className="cardstrategy">
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
        </div>
      </div>


     <div className="strategycont">
        <div className="aligntext">
          <div>
            <span className="c1">Spot</span> <span className="c11">Crypto</span>
          </div>
          <div className="c2">View all</div>
        </div>

        <div className="cardstrategy">
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
          <BasicCard word="RF 100 -15M" tag1="Investment" tag2="ROI" tag3="Drawdown" tag4="users-following" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
