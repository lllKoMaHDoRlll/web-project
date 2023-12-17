var reviewsList = [
    {
        "text": "1",
        "author": "...",
        "logo_format": "jpg"
    },
    {
        "text": "2",
        "author": "...",
        "logo_format": "png"
    },
    {
        "text": "3",
        "author": "...",
        "logo_format": "png"
    },
    {
        "text": "4",
        "author": "...",
        "logo_format": "png"
    },
    {
        "text": "5",
        "author": "...",
        "logo_format": "png"
    },
    {
        "text": "6",
        "author": "...",
        "logo_format": "jpg"
    },
    {
        "text": "7",
        "author": "...",
        "logo_format": "png"
    },
    {
        "text": "8",
        "author": "...",
        "logo_format": "png"
    }
]


document.addEventListener("DOMContentLoaded", () => {
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
});