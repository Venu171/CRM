$.ajax({
    url: "https://crm.asktakego.com/api/v1/Contact",
    type: 'GET',
    dataType: 'json',
    mode:'no-cors',
    headers: {
      "x-api-key": "ac198d1c2c9f808e2a08cb5eeb710895",
    },
    contentType: 'application/json; charset=utf-8',
    success: function (result) {
       console.log(result);
    },
    error: function (error) {
        
    }
});