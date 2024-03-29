import Swal from "sweetalert2";

export const Flash = (result: string, message?: string) => {
  if (result === "success") {
    Swal.fire({
      icon: "success",
      title: `Success`,
      text: message,
      timer: 1000,
    });
  } else if (result === "error") {
    Swal.fire({
      icon: "error",
      title: `Oops...`,
      text: message,
      // footer: '<a href="/about">Why do I have this issue?</a>',
    });
  }
};
