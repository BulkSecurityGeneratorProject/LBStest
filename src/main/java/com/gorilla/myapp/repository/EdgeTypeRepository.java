package com.gorilla.myapp.repository;

import com.gorilla.myapp.domain.EdgeType;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the EdgeType entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EdgeTypeRepository extends JpaRepository<EdgeType, Long> {

}
