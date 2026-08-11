package org.action.booook_management_.repository;

import org.action.booook_management_.entity.MyBookList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MyBookRepository extends JpaRepository<MyBookList,Integer>{

}