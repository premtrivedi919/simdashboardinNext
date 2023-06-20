import Input from "./input";
import Input2 from "./input2";
import Frame from "./frame";

const Signin1 = () => {
  return (
    <div className="sign-up1">
      <div className="frame-parent86">
        <div className="frame-parent87">
          <div className="sign-in-wrapper1">
            <div className="sign-in4">      <img className="frame-icon" alt="" src="/favicon.png" />
</div>
<div>Login</div>
          </div>
          <div className="input-with-label-container">
            <div className="input-with-label3">
              <div className="input-with-label4">
                <div className="label2">Username</div>
                <Input />
              </div>
            </div>
            <div className="input-with-label-parent1">
              <div className="input-with-label4">
                <div className="label2">Password</div>
                <Input2 />
              </div>
              <div className="helper1">{`Minimum 6 characters `}</div>
            </div>
<div class="rememberme">            <input type="checkbox" id="chbox" name="y" value="y"/>  <div>Remember me</div>
</div>

          </div>
        </div>
        <Frame />
      
      </div>
    </div>
  );
};

export default Signin1;
