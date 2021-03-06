package com.gorilla.myapp.repository;

import com.gorilla.myapp.domain.POIHistoricalLocation;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the POIHistoricalLocation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface POIHistoricalLocationRepository extends JpaRepository<POIHistoricalLocation, Long> {

}
