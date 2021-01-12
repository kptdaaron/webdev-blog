const parallax = () => {
  $(document).ready(function () {
    $(".parallax").parallax();
  });
};

const sidenav = () => {
  $(document).ready(function () {
    $(".sidenav").sidenav();
  });
};

sidenav();
parallax();
