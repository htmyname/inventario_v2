<?php

namespace App\Repository;

use App\Entity\Cotizacion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Cotizacion|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cotizacion|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cotizacion[]    findAll()
 * @method Cotizacion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CotizacionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cotizacion::class);
    }

    public function findAllCotizacion()
    {
        return $this->createQueryBuilder('c')
            ->select('c')
            ->where('c.active = 1')
            ->getQuery()
            ->getResult();
    }

    public function deleteBy($id)
    {
        return $this->createQueryBuilder('c')
            ->update(Cotizacion::class, 'c')
            ->set('c.active', '0')
            ->where('c.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return Cotizacion[] Returns an array of Cotizacion objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Cotizacion
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
