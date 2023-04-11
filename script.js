/* Json */

$(function() {
  $.ajax({
    url:"/MOCK_DATA.json",
    dataType:"json",
    success:function(data) {
      if(data.length > 0) {
        let tb = $("<table />");
        for(i in data) {
          let $id = data[i].id;
          let $first_name = data[i].first_name;
          let $last_name = data[i].last_name;
          let $email = data[i].email;
          let $gender = data[i].gender;

          let row = $("<tr />").append(
                    $("<td />").text($id),
                    $("<td />").text($first_name),
                    $("<td />").text($last_name),
                    $("<td />").text($email),
                    $("<td />").text($gender),
          );
          tb.append(row);
        }
        $(".wrap").append(tb);
      }
    }
  })
})



/* XML */

$(function() {
  $.ajax({
    url:"/dataset.xml",
    dataType:"xml",
    success:function(data) {
      let $data = $(data).find("record");
      if($data.length > 0) {
        let tb = $("<table />");
        $.each($data, function(i, o) {
          let $id =
          $(o).find("id").text();

          let $first_name =
          $(o).find("first_name").text();

          let $last_name =
          $(o).find("last_name").text();

          let $email =
          $(o).find("email").text();

          let $gender =
          $(o).find("gender").text();

          let row = $("<tr />").append(
            $("<td />").text($id),
            $("<td />").text($first_name),
            $("<td />").text($last_name),
            $("<td />").text($email),
            $("<td />").text($gender),
          );

          tb.append(row);
        });
        $(".wrap").append(tb);
      }
    }
  });
});