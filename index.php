<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style type="text/css">
  html { height: 100% }
  body { height: 100%; margin: 0; padding: 0 }
  #map_canvas { height: 100% }
</style>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="scripts/script.js"></script>

</head>
<body>
    <div id="content" style="width: 100%; height: 100%">
        <div id="map_canvas" style="position: absolute; left: 10px; top: 10px; width: 640px; height: 480px">
            
        </div>
        <div id="add_markers" style="position: absolute; left: 10px; top: 500px; width: 640px; height: 120px; background-color: #E8E8E8">
            This is the add_marker
            <form name="add_marker_form">
                Write a Place or Address: <input type="text" id="address" />
                <button id="add_marker" type="button">Submit</button>
            </form>
        </div>
        <div id="markers_list" style="position: absolute; left: 660px; top: 10px; width: 360px; height: 610px; background-color: #E8E8E8">
            This is the markers_list
            <form name="select_markers_form">
                <!-- This part is builded dynamically as the user enters places to the app -->
                <ol id="list">
                </ol>
                <button id="delete_markers" type="button">Delete</button>
            </form>
        </div>
        <div id="help" style="position: absolute; left: 1030px; top: 10px; width: 120px; height: 610px; color: red;">
            This is the help
        </div>
        <div id="footer" style="position: absolute; left: 0px; top: 630px; background-color: #158DB0; width: 100%; color: #FFFFFF; text-align: center;">
            Victor.Tabuenca at student.kuleuven.be
        </div>
    </div>   
</body>
</html>
