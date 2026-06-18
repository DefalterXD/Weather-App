const loadingComponent = document.querySelector(".loader__container");

export const showLoading = function showLoadingOnPage() {
  loadingComponent.classList.remove("hidden");
};

export const hideLoading = function hideLoadingOnPage() {
  loadingComponent.classList.add("hidden");
};
