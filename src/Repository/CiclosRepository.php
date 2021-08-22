<?php

namespace App\Repository;

use App\Entity\Ciclos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Ciclos|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ciclos|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ciclos[]    findAll()
 * @method Ciclos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CiclosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ciclos::class);
    }

    // /**
    //  * @return Ciclos[] Returns an array of Ciclos objects
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
    public function findOneBySomeField($value): ?Ciclos
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
