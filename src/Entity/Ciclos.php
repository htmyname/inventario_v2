<?php

namespace App\Entity;

use App\Repository\CiclosRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CiclosRepository::class)
 */
class Ciclos
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
     * @ORM\OneToMany(targetEntity=Cotizacion::class, mappedBy="ciclo")
     */
    private $cotizacions;

    public function __construct()
    {
        $this->cotizacions = new ArrayCollection();
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

    /**
     * @return Collection|Cotizacion[]
     */
    public function getCotizacions(): Collection
    {
        return $this->cotizacions;
    }

    public function addCotizacion(Cotizacion $cotizacion): self
    {
        if (!$this->cotizacions->contains($cotizacion)) {
            $this->cotizacions[] = $cotizacion;
            $cotizacion->setCiclo($this);
        }

        return $this;
    }

    public function removeCotizacion(Cotizacion $cotizacion): self
    {
        if ($this->cotizacions->removeElement($cotizacion)) {
            // set the owning side to null (unless already changed)
            if ($cotizacion->getCiclo() === $this) {
                $cotizacion->setCiclo(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }


}
