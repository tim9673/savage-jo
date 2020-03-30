<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{

    private $films = [
        [
            'id' => 1,
            'poster' => 'images/doubleblack.png',
            'name' => 'Doubleblack',
            'heading' => 'After a suicide attempt, Michael is dragged on an intense Mountainbike trail ride by his insufferably obnoxious and combative friend, Gaz.',
            'description' => 'DOUBLE BLACK follows Michael. After a suicide attempt, Michael is dragged against his will by his mate Gaz, an energetic, mens-rights-advocate, firebrand patriot, true blue aussie on a mountainbike trail ride. The ride is as hellish as Michael could have imagined, as he braves the challenges of the ride, Gaz’s nauseating banter and his own depression… However, unbenknownst to Michael, Gaz has a surprise in store for him…',
            'trailer' => '//www.youtube.com/embed/-ertcdY7cL8?wmode=opaque&enablejsapi=1'
        ],
        [
            'id' => 2,
            'poster' => 'images/stringybark.png',
            'name' => 'Stringybark',
            'heading' => 'The incredible true story of the Police officers murdered at Stringybark Creek.',
            'description' => 'Stringybark is a period drama depicting the true story of a party of mounted police in colonial Victoria tasked with the arrest and apprehension of the notorious Ned Kelly. It is 1878, and Sergeant Michael Kennedy, an experienced Victorian Mounted Police Officer in Mansfield, Victoria, receives a cable from his superiors tasking him with leading a party of police into the Wombat Ranges, to arrest criminal brothers Ned and Daniel Kelly and any known accomplices. Written by Ben Head',
            'trailer' => '//www.youtube.com/embed/vyKmWbhWCUE?wmode=opaque&enablejsapi=1'
        ],
        [
            'id' => 3,
            'poster' => 'images/swiperight.jpg',
            'name' => 'Swiperight',
            'heading' => '',
            'description' => 'Swipe Right The Web Series started as an onstage Sketch Comedy Show in 2015. After 2 highly successful theatre runs, it was time to take these characters to the screen. Follow 6 different characters in 5 uniquely quirky tales surrounding the search for connection, mostly, in the wrong places.',
            'trailer' => '//www.youtube.com/embed/qq20i6646ZQ?start=3&wmode=opaque&enablejsapi=1'
        ]
        ];

    /**
     * @Route("/{notFound}", name="notFound")
     */
    public function notFound() 
    {
        return $this->render('default/notFound.html.twig');
    }

    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [
            'films' => $this->films
        ]);
    }



    /**
     * @Route("/api/films", name="films")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getFilms()
    {
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($this->films));
        
        return $response;
    }
}
