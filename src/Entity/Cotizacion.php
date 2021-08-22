<?php

namespace App\Entity;

use App\Repository\CotizacionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CotizacionRepository::class)
 */
class Cotizacion
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $detalles;

    /**
     * @ORM\Column(type="float")
     */
    private $precio;

    /**
     * @ORM\Column(type="float")
     */
    private $xcientoganancia;

    /**
     * @ORM\Column(type="boolean")
     */
    private $factura;

    /**
     * @ORM\Column(type="boolean")
     */
    private $active;

    /**
     * @ORM\ManyToOne(targetEntity=Ciclos::class, inversedBy="cotizacions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $ciclo;

    /**
     * Cotizacion constructor.
     * @param $active
     */
    public function __construct()
    {
        $this->active = true;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDetalles(): ?string
    {
        return $this->detalles;
    }

    public function setDetalles(string $detalles): self
    {
        $this->detalles = $detalles;

        return $this;
    }

    public function getPrecio(): ?float
    {
        return $this->precio;
    }

    public function setPrecio(float $precio): self
    {
        $this->precio = $precio;

        return $this;
    }

    public function getXcientoganancia(): ?float
    {
        return $this->xcientoganancia;
    }

    public function setXcientoganancia(float $xcientoganancia): self
    {
        $this->xcientoganancia = $xcientoganancia;

        return $this;
    }

    public function getfactura(): ?bool
    {
        return $this->factura;
    }

    public function setfactura(bool $factura): self
    {
        $this->factura = $factura;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getCiclo(): ?Ciclos
    {
        return $this->ciclo;
    }

    public function setCiclo(?Ciclos $ciclo): self
    {
        $this->ciclo = $ciclo;

        return $this;
    }
}
