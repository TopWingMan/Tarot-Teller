html,
body {
  height: 100%;
}

html,
body,
input,
textarea,
button {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}


/**
 * Header CSS
 */
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}

header ul.mui-list--inline {
  margin-bottom: 0;
}

header a {
  color: #fff;
}

header table {
  width: 100%;
}


/**
 * Content CSS
 */
#content-wrapper {
  min-height: 100%;

  /* sticky footer */
  box-sizing: border-box;
  margin-bottom: -100px;
  padding-bottom: 100px;
}


/**
 * Footer CSS
 */
footer {
  box-sizing: border-box;
  height: 100px;
  background-color: #eee;
  border-top: 1px solid #e0e0e0;
  padding-top: 35px;
}

