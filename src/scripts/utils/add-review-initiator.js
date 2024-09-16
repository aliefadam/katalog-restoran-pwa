const AddReviewInitiator = {
  init({ overlay, box, btnClose }) {
    document.addEventListener("click", ({ target }) => {
      if (target.id == "add-review") {
        console.log("TES");
      }
    });

    console.log({ overlay, box, btnClose });
  },

  _addReview({ button, overlayReview, boxReview }) {
    console.log("TES");
  },
};
export default AddReviewInitiator;
