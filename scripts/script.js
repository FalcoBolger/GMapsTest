var geocoder,
    map,
    markersArray = [];
    
window.onload = function() {
    initialize();
}    
function initialize() {
    var address = "Leuven",
        latlng;
        
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address':address}, function(results, status){
       if (status == google.maps.GeocoderStatus.OK)  {
           latlng = results[0].geometry.location;
           var myOptions = {
               zoom: 14,
               center: latlng,
               mapTypeId: google.maps.MapTypeId.ROADMAP
           };
           map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
       }else {
           alert("WTF creating map!!!");
       }
    });    
    //getData();
    
    //
    document.getElementById("add_marker").onclick = function() {
        addMarker(document.getElementById("address").value);
    }    
    document.getElementById("delete_markers").onclick = deleteMarkers;
  }
  
  //load data from the server for adding markers to the map
  function getData() {
      var url = "addresses.php";
      var request = new XMLHttpRequest();
      request.open("GET",url);
      request.onreadystatechange = function() {
          if (request.readyState === 4 && request.status === 200) {
              response = request.responseXML;
              var addresses = response.getElementsByTagName("addresses")[0];
              var length = addresses.childNodes.length;
              if (length > 0) {
                  for (var i=0; i<length; i++) {
                      var address = addresses.childNodes[i];
                      //weird
                      var street = address.childNodes[0].childNodes[0].nodeValue;
                      var number = address.childNodes[1].childNodes[0].nodeValue;
                      var city = address.childNodes[2].childNodes[0].nodeValue;
                      var description = address.childNodes[3].childNodes[0].nodeValue;
                      var string = street + " " + number + ", " + city;
                      addMarker(string, description);
                  }
              }
          }
      };
      request.send();
  }
  
  function addMarker(address) {
      var mlatlng;
      geocoder.geocode({'address':address}, function(results, status){
          if (status == google.maps.GeocoderStatus.OK)  {
              mlatlng = results[0].geometry.location;
              var marker = new google.maps.Marker({
                  position: mlatlng,
                  title: address
              });
              marker.setMap(map);
              markersArray.push(marker);
              //and also andd the marker to the markers_list in the document
              var list = document.getElementById("list");
              var li = document.createElement("li");
              var checkbox = document.createElement("input");
              checkbox.setAttribute("type", "checkbox");
              checkbox.setAttribute("name", "address");                 //This is for selecting the checkboxes in the document
              checkbox.setAttribute("value", markersArray.length);      //This is intended to be used in the deleteMarkers function for identifying markers
              li.appendChild(checkbox);
              li.appendChild(document.createTextNode(address));
              list.appendChild(li);
          }else {
              alert("WTF adding Marker!!!");
          }
    });    
  }
  
  function deleteMarkers() {
      //Modify the code for deleting only the selected markers in the list   
      var tmp = [];
      if (markersArray) {
          var checkboxes = document.getElementsByName("address");
          for (var i=0; i<checkboxes.length; i++) {
              if (checkboxes[i].checked) {                              //This markers are going to be deleted
                  console.log(checkboxes[i]);
                  //delete the marker from the markers_list in the document
                  checkboxes[i].parentNode.parentNode.removeChild(checkboxes[i].parentNode);
                  markersArray[i].setMap(null);
                  markersArray.splice(i,1);
              }
          }
          console.log(markersArray.length);
      }      
  }