<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});


$app->post('/home/[{type}]', function(Request $request, Response $response, array $args){

    $typeBooks = $args['type'];


    sleep(3);

    $responseBody = [];
    $perSize = 15;
    for ($i = 0; $i < $perSize; $i++) {
        $responseBody[$i] = [
            'price' => rand(0, 1000),
            'name' => uniqid($typeBooks.'_'),
            'src' =>  sprintf('/images/books/books_%d.png', rand(1,15))
        ];

        if ($i % 4 == 0) {
            $responseBody[$i]['sale'] = rand(10,30);
        }
    }


    $newResponse = $response->withHeader('Content-Type', 'application/json')->withJson($responseBody);

    return $newResponse;

});

$app->post('/category/loadmore', function(Request $request, Response $response, array $args){

    sleep(2);

    return $this->renderer->render($response, 'categories.html');
});
