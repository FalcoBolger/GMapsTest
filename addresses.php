<?php
header('Content-Type: text/xml');
// create the new XML document
$dom = new DOMDocument();
// create the root <response> element
$response = $dom->createElement('response');
$dom->appendChild($response);
// create the <ads> element and append it as a child of <response>
$ads = $dom->createElement('addresses');
$response->appendChild($ads);

$db = array('address1'=>array('street'=>'Dekenstraat',
                            'number'=>'2',
                            'city'=>'Leuven',
                            'Description'=>'Van Den Heuvelinstituut'),
            'address2'=>array('street'=>'Dekenstraat',
                            'number'=>'6',
                            'city'=>'Leuven',
                            'Description'=>'ILT'),
            'address3'=>array('street'=>'Celestijnenlaan',
                            'number'=>'200A',
                            'city'=>'Leuven',
                            'Description'=>'Dept. Computer Science'),
            'address4'=>array('street'=>'Mathieu de Layensplein',
                            'number'=>'1',
                            'city'=>'Leuven',
                            'Description'=>'De Lange Trappen')
    );

foreach ($db as $key=>$value) {
    $ad = $dom->createElement('ad');
    foreach ($value as $info=>$data) {
            $content = $dom->createElement($info,$data);
            $ad->appendChild($content);	
    }	
    $ads->appendChild($ad);  
}

// build the XML structure in a string variable
$xmlString = $dom->saveXML();
// output the XML string
echo $xmlString;
?>