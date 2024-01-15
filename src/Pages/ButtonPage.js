import Button from "../Components/Button";
import { FaBell } from "react-icons/fa6";
import { VscCloudUpload } from "react-icons/vsc";
import { IoServerOutline } from "react-icons/io5";

function ButtonPage() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <FaBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <VscCloudUpload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
        <IoServerOutline />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
