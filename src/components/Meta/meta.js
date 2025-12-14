import styles from './meta.module.css';
function Meta ({timeframe, tags = [], title}) {
    return <div className={styles.meta}>
              {timeframe && <span className={styles.timeframe}>{timeframe}</span>}
              {tags?.length ? (
                <div className={styles.tags}>
                  {tags.map((tag) => (
                    <span key={`${title}-${tag}`} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
}

export default Meta;