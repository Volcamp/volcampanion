package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entity.UserFeedbackTalkEntity;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserFeedbackTalkRepository implements PanacheRepository<UserFeedbackTalkEntity> {
}
