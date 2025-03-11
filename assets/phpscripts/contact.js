const supabase = window.supabase.createClient(
  CONFIG.SUPABASE_URL,
  CONFIG.SUPABASE_ANON_KEY
);
const successMessage = document.querySelector("#msgSubmit");
document.querySelector(".close").addEventListener("click", () => {
  successMessage.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Supabase initialized:", supabase);

  $(function () {
    $("#ajax-contact").validator();
    $("#ajax-contact").on("submit", async function (e) {
      e.preventDefault(); // Prevent default form submission

      let formData = $(this).serializeArray();
      let contactData = {};

      // Convert form data to an object
      formData.forEach((field) => {
        contactData[field.name] = field.value;
      });

      console.log("Submitting:", contactData);

      // Insert data into Supabase
      const { data, error } = await supabase
        .from("contact_form")
        .insert([contactData]);

      if (error) {
        console.error("Error:", error);
        alert("Something went wrong! Please try again.");
      } else {
        $("#msgSubmit").removeClass("hidden");
        $("#ajax-contact")[0].reset();
      }
    });
  });
});
