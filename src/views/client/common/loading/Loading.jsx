import React from "react";
import classNames from "classnames/bind";
import styles from "./loading.module.scss";
const cx = classNames.bind(styles);
export default function Loading() {
  return (
    <section className={cx("wrapper")}>
      <div className={cx("content")}>
        <h2>Doctor Care</h2>
        <h2>Doctor Care</h2>
      </div>
    </section>
  );
}
