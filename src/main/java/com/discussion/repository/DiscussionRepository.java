package com.discussion.repository;

import org.springframework.data.repository.CrudRepository;

import com.discussion.domain.DiscussionEntity;

public interface DiscussionRepository
        extends CrudRepository<DiscussionEntity, Integer> {

}
