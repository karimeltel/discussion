package com.discussion.service;

import java.util.Collection;

import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import com.discussion.domain.DiscussionEntity;

@Service
public interface DiscussionService {

    DiscussionEntity create(DiscussionEntity entity) throws Exception;

    DiscussionEntity update(DiscussionEntity entity) throws Exception;

    Collection<DiscussionEntity> findAll();

    DiscussionEntity findById(Integer id) throws ObjectNotFoundException;
    
    void deleteById(Integer id) throws Exception;

    

}
