import resolveAsset from "../lib/resolveAsset";

function Image({ src, styles }) {
  const onLoad = () => {
    console.log("loaded");
  };
  return <img className={styles} src={resolveAsset(src)} onLoad={onLoad} />;
}
export default Image;
