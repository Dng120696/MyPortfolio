// images.js
const onlineStoreImages = import.meta.glob("../assets/onlineStoreImg/*.png", {
  eager: true,
});
const stockAppImages = import.meta.glob("../assets/stockAppImg/*.png", {
  eager: true,
});
const slackCloneImages = import.meta.glob("../assets/slackCloneImg/*.png", {
  eager: true,
});
const bankAppImages = import.meta.glob("../assets/bankAppImg/*.png", {
  eager: true,
});
const journalAppImages = import.meta.glob("../assets/journalAppImg/*.png", {
  eager: true,
});
const restCountriesImages = import.meta.glob(
  "../assets/restCountriesImg/*.png",
  {
    eager: true,
  }
);

// Convert the imported images into an array
const convertGlobToArray = (glob) => {
  const imagesArray = Object.values(glob).map((module) => module.default);
  // Sort the array based on file names
  imagesArray.sort((a, b) => {
    const indexA = parseInt(a.split("/").pop().split(".")[0]);
    const indexB = parseInt(b.split("/").pop().split(".")[0]);
    return indexA - indexB;
  });
  return imagesArray;
};

export const onlineStoreImagesArray = convertGlobToArray(onlineStoreImages);

export const stockAppImagesArray = convertGlobToArray(stockAppImages);
export const slackCloneImagesArray = convertGlobToArray(slackCloneImages);
export const bankAppImagesArray = convertGlobToArray(bankAppImages);
export const journalAppImagesArray = convertGlobToArray(journalAppImages);
export const restCountriesImagesArray = convertGlobToArray(restCountriesImages);
