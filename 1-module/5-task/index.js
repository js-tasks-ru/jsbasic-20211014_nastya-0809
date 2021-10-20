function truncate(str, maxlength) {
  let strLength = (str.length > maxlength) ? true : false;

  if (strLength) {

    return str.slice(0, maxlength - 1) + "…";

  } else {
    return str;
  }
}
