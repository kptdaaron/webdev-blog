const parallax = () => {
  $(document).ready(function () {
    $(".parallax").parallax();
  });
};
const carousel = () => {
  $(".carousel").carousel(
    {
      height: 100,
      width: 300,
      padding: 200,
    },
    setTimeout(autoplay, 4500)
  );

  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 10000);
  }
};
const sidenav = () => {
  $(document).ready(function () {
    $(".sidenav").sidenav();
  });
};

sidenav();
carousel();
parallax();
