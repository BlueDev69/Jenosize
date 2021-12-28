import Lottie from "react-lottie-player";
import * as loadingData from "./jenosize-loading.json";
interface LoadingProps {
  modal?: boolean;
}

const JenosizeLoading = ({ modal = true }: LoadingProps) => {
  return (
    <div
      className={`${
        modal &&
        "h-full w-full fixed block z-50 flex inset-0 items-center justify-center"
      }`}
    >
      <Lottie
        animationData={loadingData}
        style={{
          width: "30%",
          height: "50%",
        }}
        speed={1}
        play
        loop
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />
    </div>
  );
};

export default JenosizeLoading;
