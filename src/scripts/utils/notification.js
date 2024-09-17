import Swal from 'sweetalert2';

const Notification = {
  showNotificatioin ({ title, text, icon }) {
    Swal.fire({
      title,
      text,
      icon,
      customClass: {
        container: 'custom-swal-container'
      }
    });
  }
};

export default Notification;
