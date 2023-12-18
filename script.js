var reviewsList = [
    {
        "text": `The interior of the cafe is tastefully decorated with comfortable seating, quirky cat-themed artwork, and an array of cozy nooks where patrons can enjoy their coffee. The soft purring and playful antics of the resident feline companions create an incredibly soothing ambiance, making it an ideal spot to unwind and escape the hustle and bustle of daily life.`,
        "author": "Purr-fectly Delightful Experience at Coffee & Cats - Where Coffee Meets Feline Charm!",
        "logo_format": "jpg"
    },
    {
        "text": "Speaking of espresso, the coffee at Coffee & Cats is nothing short of exceptional. The baristas display a mastery of their craft, ensuring that each cup is a work of art in both presentation and flavor. Whether you prefer a velvety latte, a bold Americano, or a perfectly brewed cappuccino, the menu offers a diverse selection to satisfy every coffee preference.",
        "author": "A Feline Haven with a Side of Espresso Elegance at Coffee & Cats",
        "logo_format": "png"
    },
    {
        "text": "What impressed me most about Coffee & Cats is their dedication to the well-being of the cats. The staff is attentive and knowledgeable, ensuring that both guests and feline friends coexist harmoniously. The hygiene standards are impeccable, and it's evident that the cats are happy, healthy, and well-cared-for members of the cafe community.",
        "author": "",
        "logo_format": "jpg"
    },
    {
        "text": "Coffee & Cats is not just a coffee shop; it's a haven for cat enthusiasts and coffee lovers alike. My recent visit to this delightful establishment left me with a profound sense of joy and relaxation, and I can't wait to share my wonderful experience.",
        "author": "",
        "logo_format": "webp"
    }
]

function sendFormData(event) {
    console.log("sending form");
    event.preventDefault();
    if (!isFormValid()) return false;

    let request = new XMLHttpRequest();
    request.open("POST", "https://formcarry.com/s/jfnPbjBfup");
    request.setRequestHeader("ACCEPT", "application/json");

    let data = new FormData();
    
    let inputEls = document.getElementsByClassName("local-save");
    [...inputEls].forEach(inputEl => {
        data.append(inputEl.id, inputEl.value);
    });
    
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          const status = request.status;
          if (status === 0 || (status >= 200 && status < 400)) {
            alert("Form was sended successfully.");
          } else {
            alert(`An error was occured while sending form. Error code: ${status}.`);
          }
        }
      };

    request.send(data);
    clearInputFields(inputEls);
    closeModal();
}

function isFormValid() {
    let nameEl = document.getElementById("user-name");
    if (nameEl.value == "") {
        alert("Please, enter name.");
        return false;
    }

    let emailEl = document.getElementById("user-email");
    if (emailEl.value != "" && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailEl.value)) {
        alert("Incorrect Email format.");
        return false;
    }

    let phoneEl = document.getElementById("user-phone");
    if (phoneEl.value != "" && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(phoneEl.value)) {
        alert("Incorrect Phone format.");
        return false;
    }


    let messageEl = document.getElementById("user-message");
    if (messageEl.value == "") {
        alert("Please, enter message.");
        return false;
    }

    let acceptionEl = document.getElementById("user-acception");
    if (!acceptionEl.checked) {
        alert("Accept Politics privacy.");
        return false;
    }

    return true;
}

function clearInputFields(inputEls) {
    [...inputEls].forEach(inputEl => {
        inputEl.value = "";
        localStorage.setItem(inputEl.id, "");
    });
    console.log(localStorage);
}

function loadInput(inputEl) {
    inputEl.value = localStorage.getItem(inputEl.id);
}

function saveInput(event) {
    localStorage.setItem(event.target.id, event.target.value);
}

document.addEventListener("DOMContentLoaded", () => {
    let inputEls = document.getElementsByClassName("local-save");

    [...inputEls].forEach(inputEl => {
        loadInput(inputEl);
    });
    
    [...inputEls].forEach(inputEl => {
        inputEl.addEventListener("input", saveInput);
    });

    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", sendFormData);

    function loadReview(index) {
        reviewsTextEl.innerHTML = reviewsList[currentPageIndex].text;
        reviewsAuthorEl.innerHTML = reviewsList[currentPageIndex].author;
        reviewsLogoEl.src = "media/images/reviews_logos/" + (currentPageIndex + 1) + "." + reviewsList[currentPageIndex].logo_format;

        curPageEl.innerHTML = "0" + (currentPageIndex + 1);
    }

    var currentPageIndex = 0;

    var reviewsArrowRightEl = document.getElementById("reviews-pagination-arrow-right");
    var reviewsArrowLeftEl = document.getElementById("reviews-pagination-arrow-left");
    var curPageEl = document.getElementById("cur-page");
    var totalPagesEl = document.getElementById("total-pages");
    var reviewsTextEl = document.getElementById("review-text-inner");
    var reviewsAuthorEl = document.getElementById("review-author-inner");
    var reviewsLogoEl = document.getElementById("review-logo-inner");

    loadReview(0);

    totalPagesEl.innerHTML = "0" + reviewsList.length;

    reviewsArrowLeftEl.addEventListener("click", () => {
        currentPageIndex += reviewsList.length - 1;
        currentPageIndex %= reviewsList.length;
        loadReview(currentPageIndex);
    });

    reviewsArrowRightEl.addEventListener("click", () => {
        currentPageIndex++;
        currentPageIndex %= reviewsList.length;
        loadReview(currentPageIndex);
    });

    var dropoutMenuButtonEl = document.getElementById("nav-links-dropout-button-inner");
    var dropoutEl = document.getElementById("dropout-menu");

    dropoutMenuButtonEl.addEventListener("click", () => {
        dropoutEl.style.display = "flex";
    });

    

    var MobileMenuButtonEl = document.getElementById("menu-mobile-icon");
    var MobileMenuEl = document.getElementById("nav-links-menu-mobile-content");
    
    MobileMenuButtonEl.addEventListener("click", () => {
        MobileMenuEl.style.display = "unset";
        MobileMenuEl.style.height = "unset";
        console.log(1);
    });

    document.addEventListener("click", (event) => {
        if (event.target != dropoutMenuButtonEl) {
            dropoutEl.style.display = "none";
        }
        if (event.target != MobileMenuButtonEl) {
            MobileMenuEl.style.display = "none";
            MobileMenuEl.style.height = "0";
            console.log(event.target);
        }       
    });

    var clientsSlider1 = new Splide( '#clients-gallery-1', {
        type: "loop",
        width: "140%",
        perMove: 1,
        perPage: 14,
        gap: "1em",
        autoWidth: true,
        arrows: false,
        pagination: false,
        drag: false,
        autoplay: true,
        interval: 4000,
        speed: 1200,
        breakpoints: {
            780: {
                height: "100px",
            }
        }
    });
    clientsSlider1.mount();

    var clientsSlider2 = new Splide( '#clients-gallery-2', {
        type: "loop",
        width: "140%",
        perMove: 1,
        perPage: 16,
        gap: "1em",
        autoWidth: true,
        arrows: false,
        pagination: false,
        drag: false,
        autoplay: true,
        interval: 5000,
        speed: 1200,
    });
    clientsSlider2.mount();
});