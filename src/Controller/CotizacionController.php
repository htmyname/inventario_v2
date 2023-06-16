<?php

namespace App\Controller;

use App\Entity\Cotizacion;
use App\Form\CotizacionType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/cotizacion")
 */
class CotizacionController extends AbstractController
{
    /**
     * @Route("", name="app_cotizacion")
     */
    public function index(Request $request): Response
    {

        $cotizacion = new Cotizacion();
        $form = $this->createForm(CotizacionType::class, $cotizacion);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($cotizacion);
            $em->flush();
            $this->addFlash('success', 'Cotizacion añadida');
            return $this->redirectToRoute('app_cotizacion');
        }

        $data = $this->getDoctrine()->getRepository(Cotizacion::class)->findAllCotizacion();

        return $this->render('cotizacion/index.html.twig', [
            'form' => $form->createView(),
            'data' => $data
        ]);
    }

    /**
     * @Route("/delete/{id}", name="app_cotizacion_delete", requirements={"id"="\d+"})
     */
    public function delete($id = null): \Symfony\Component\HttpFoundation\RedirectResponse
    {
        if ($id !== null) {
            $this->getDoctrine()->getRepository(Cotizacion::class)->deleteBy($id);
        }
        return $this->redirectToRoute('app_services');
    }

    /**
     * @Route("/edit/{id}", name="app_cotizacion_edit", requirements={"id"="\d+"})
     */
    public function edit(Request $request,$id = null)
    {
        if ($id !== null) {
            $cotizacion = $this->getDoctrine()->getRepository(Cotizacion::class)->find($id);
            if (!$cotizacion) {
                return $this->redirectToRoute('app_cotizacion');
            }
        } else {
            return $this->redirectToRoute('app_cotizacion');
        }

        $form = $this->createForm(CotizacionType::class, $cotizacion);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($cotizacion);
            $em->flush();
            $this->addFlash('success', 'Cotizacion editada');
            return $this->redirectToRoute('app_cotizacion');
        }
        return $this->render('cotizacion/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
