package com.discussion.service.impl;


import java.util.Collection;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.discussion.domain.DiscussionEntity;
import com.discussion.exception.ObjectNotFoundException;
import com.discussion.repository.DiscussionRepository;
import com.discussion.service.DiscussionService;
import com.google.common.collect.Lists;

@Service
public class DiscussionServiceImpl implements DiscussionService {

    private static final String ID_DOES_NOT_EXIST = "ID does not exist ";
    private static final String ID_MUST_BE_PROVIDED = "ID must be provided";

    private DiscussionRepository repository;


    @Autowired
    public DiscussionServiceImpl(DiscussionRepository discussionRepository) {
        this.repository = discussionRepository;
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public DiscussionEntity create(DiscussionEntity entity) throws Exception {
        return repository.save(entity);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public DiscussionEntity update(DiscussionEntity entity) throws Exception {
        return repository.save(entity);
    }

    @Override
    public Collection<DiscussionEntity> findAll() {
        if (repository.findAll() == null) {
            return Lists.newArrayList();
        }
        return Lists.newArrayList(repository.findAll());
    }

    @Override
    public DiscussionEntity findById(Integer id) throws ObjectNotFoundException {

        if (id == null) {
            throw new ObjectNotFoundException(ID_MUST_BE_PROVIDED);
        }

        Optional<DiscussionEntity> entity = Optional.ofNullable(repository.findOne(id));
        if (!entity.isPresent()) {
            throw new ObjectNotFoundException(ID_DOES_NOT_EXIST);
        } else {
            return entity.get();
        }
    }

    @Override
    public void deleteById(Integer id) throws Exception {
        if (id == null) {
            throw new Exception(ID_MUST_BE_PROVIDED);
        }
        repository.delete(id);
    }

}
