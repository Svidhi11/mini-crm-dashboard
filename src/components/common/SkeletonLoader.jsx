
import "./SkeletonLoader.css";

const SkeletonLoader = ({ height = "150px", width = "100%", borderRadius = "8px" }) => {
  return (
    <div
      className="skeleton-loader"
      style={{
        height,
        width,
        borderRadius,
      }}
    ></div>
  );
};

export default SkeletonLoader;
