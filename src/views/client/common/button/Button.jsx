import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);

export default function Button({ to, href, btn_green, btn_outline, cursor_pointer, btn_blue, children, className, onClick, ...passProps }) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  //check button to or href

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("btn", {
    [className]: className,
    btn_green,
    btn_blue,
    btn_outline,
    cursor_pointer,
  });
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}
