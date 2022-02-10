import { Oval } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <Oval type="Oval" color="#30999e" height={40} width={40} />
    </LoaderContainer>
  );
};

export default Loader;
