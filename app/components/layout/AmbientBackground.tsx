import classes from "./AmbientBackground.module.css";

export function AmbientBackground() {
  return (
    <div className={classes.root} aria-hidden="true">
      <div className={classes.grid} />
      <div className={`${classes.blob} ${classes.one}`} />
      <div className={`${classes.blob} ${classes.two}`} />
      <div className={`${classes.blob} ${classes.three}`} />
      <div className={classes.noise} />
    </div>
  );
}
