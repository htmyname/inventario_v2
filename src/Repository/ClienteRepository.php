<?php

namespace App\Repository;

use App\Entity\Cliente;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Cliente|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cliente|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cliente[]    findAll()
 * @method Cliente[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClienteRepository extends ServiceEntityRepository
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Cliente::class);
	}

	public function findAllClients()
	{
		return $this->createQueryBuilder('c')
			->select('c')
			->where('c.active = 1')
			->getQuery()
			->getResult();
	}

	public function deleteClient($id)
	{
		return $this->createQueryBuilder('c')
			->update('App:Cliente', 'c')
			->set('c.active', '0')
			->where('c.id = :id')
			->setParameter('id', $id)
			->getQuery()
			->getResult();
	}

	public function getClientName($data)
	{
		return $this->createQueryBuilder('c')
			->select('c.name', 'c.id', 'c.tell')
			->where('c.name like :data')
			->andWhere('c.active = 1')
			->setParameter('data', "%$data%")
			->setMaxResults(5)
			->getQuery()
			->getResult();
	}


	/*
	public function findOneBySomeField($value): ?Cliente
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
