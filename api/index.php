<?php

require_once '../include/DbHandler.php';
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */
$app = new \Slim\Slim();


function echoResponseWithStatus($statusCode, $response)
{
	$app = \Slim\Slim::getInstance();
	$app->status($statusCode);
	$app->contentType('application/json');
	
	echo json_encode($response);
}

function echoResponse($response)
{
	echoResponseWithStatus(200, $response);
}

$app->get('/getShop/:id', function($id){

		$response = array();
		$db= new DbHandler();
		$result = $db->getShopById($id);
		if($result !=NULL)
		{
			$response["ID"] = $result["ID"];
			$response["Description"] = 	 $result["Description"];
			$response["Longtitude"] 		 =	 $result["Longtitude"];
			$response["Latitude"] 		 = 	 $result["Latitude"];
			
			echoResponse($response);
		}
	
});

$app->post('/search', function() use($app){
		$searchQuery = $app->request()->post('searchQuery');
		
		echoResponse('Meine suchresultate');
});



$app->run();


?>