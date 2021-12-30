import loader from '../../../src/images/loader.gif';

const Loader = ({ alt }: { alt: string }) => {
  return <img src={loader} alt={alt} height={50} />;
};

export default Loader;
