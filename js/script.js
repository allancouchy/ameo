/**
 * control the appearance of header shadow on scroll window
 * listen to scroll window
 * scrollY is bigger than 25 it appears
 * scrollY is smaller than 25 it does not appear or it desappears
 */

const headerShadow = () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (scrollY > 25) {
      header.style.cssText = "box-shadow: 0px 3px 15px #00000040;";
    } else {
      header.style.cssText = "box-shadow: none;";
    }
  });
};
headerShadow();

/**
 * control the enlargement of the article
 * listen to button click
 * button textContent value equals "lire la suite" the parent element grows else reduice it
 */

const readMore = () => {
  const button = document.querySelector(".btn--more");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let workItem = e.target.closest("li");

    if (button.textContent == "Lire la suite") {
      workItem.style.cssText = "height: 400px";
      button.textContent = "Réduire";
      isActive = true;
    } else {
      workItem.style.cssText = "heigth: 315px";
      button.textContent = "Lire la suite";
    }
  });
};
readMore();

/**
 * functions for Interimgir with pop-up window
 * 1st : click on btn--plus to open pop-up window
 * 2st : click on btn--close to close pop-up window
 */

const openClientsPopUp = () => {
  const button = document.querySelector(".btn--plus");
  const clientWindow = document.querySelector(".client__window");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    clientWindow.style.cssText = "display: flex;";
  });
};
openClientsPopUp();

const closeClientsPopUp = () => {
  const button = document.querySelector(".btn--close");
  const clientWindow = document.querySelector(".client__window");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    clientWindow.style.cssText = "display: none;";
  });
};
closeClientsPopUp();

/**
 * control the appearance of the scrollToTop button on scroll window
 * scrollY is bigger than 25 it appears
 * scrollY is smaller than 25 it does not appear or it desappears
 * scroll window is inactive during 10s it desappears
 */

const scrollToTop = () => {
  const scrollToTopElement = document.querySelector(".btn--scroll");

  window.addEventListener("scroll", () => {
    if (scrollY > 25) {
      scrollToTopElement.style.cssText = "opacity: 1";
      setTimeout(() => {
        scrollToTopElement.style.cssText = "opacity: 0";
      }, 10000);
    } else {
      scrollToTopElement.style.cssText = "opacity: 0";
    }
  });
};
scrollToTop();

