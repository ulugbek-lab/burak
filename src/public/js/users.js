console.log("Users frontend javascript file");

$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id;
    console.log("id", id);

    const memberStatus = $(`#${id}.member-status`).val();
    console.log("memberStatus", memberStatus);

    // TODO: AXIOS updateChosenUser
    axios
      .post("/admin/user/edit", {
        _id: id,
        memberStatus: memberStatus,
      })
      .then((response) => {
        console.log(response);
        const result = response.data;
        console.log(result);
        if (result.data) {
          console.log("user updated");
          $(".member-status").blur();
        } else alert("user update is failed");
      })
      .catch((err) => {
        console.log(err);
        alert("user update is failed");
      });
  });
});
