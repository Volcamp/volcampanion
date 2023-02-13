package org.volcampanion.service;

import org.volcampanion.domain.FeedBack;
import org.volcampanion.entities.mappers.FeedbackMapper;
import org.volcampanion.reposistories.FeedBackRepo;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.List;

@ApplicationScoped
public class FeedBackService {
    @Inject
    FeedBackRepo repo;

    @Inject
    FeedbackMapper feedbackMapper;

    public List<FeedBack> getAll() {
        return feedbackMapper.listEntityToDomain(repo.findAll().list());
    }

    public FeedBack getById(Long id) {
        return feedbackMapper.entityToDomain(repo.findById(id));
    }


}
