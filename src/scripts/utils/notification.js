import Swal from "sweetalert2";

const Notification = {
  showNotificatioin({ title, text, icon }) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      customClass: {
        container: "custom-swal-container",
      },
    });
  },
};

export default Notification;
