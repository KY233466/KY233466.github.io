function Image({ src, styles }) {
  const onLoad = () => {
    console.log("loaded");
  };
  return <img className={styles} src={src} onLoad={onLoad} />;
}
export default Image;